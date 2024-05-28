import { Command } from './command.interface.js';
import { TSVFileReader } from '../../shared/libs/file-reader/index.js';
import chalk from 'chalk';
import { createOffer, getErrorMessage, getMongoURI } from '../../shared/helpers/index.js';
import { UserService } from '../../shared/modules/user/index.js';
import { DefaultOfferService, OfferModel, OfferService } from '../../shared/modules/offer/index.js';
import { DatabaseClient, MongoDatabaseClient } from '../../shared/libs/database-client/index.js';
import { Logger } from '../../shared/libs/logger/index.js';
import { ConsoleLogger } from '../../shared/libs/logger/console.logger.js';
import { DefaultUserService, UserModel } from '../../shared/modules/user/index.js';
import { Offer } from '../../shared/types/index.js';

export const DATABASE_PORT = '27017';
export const DEFAULT_USER_PASSWORD = '123456';

export class DataImportCommand implements Command {
  private userService: UserService;
  private offerService: OfferService;
  private databaseClient: DatabaseClient;
  private logger: Logger;
  private hashSalt: string;

  constructor() {
    this.handleLineImport = this.handleLineImport.bind(this);
    this.completeImport = this.completeImport.bind(this);

    this.logger = new ConsoleLogger();
    this.offerService = new DefaultOfferService(this.logger, OfferModel);
    this.userService = new DefaultUserService(this.logger, UserModel);
    this.databaseClient = new MongoDatabaseClient(this.logger);
  }

  private async handleLineImport(line: string, resolve: () => void) {
    const offer = createOffer(line);
    await this.saveOffer(offer);
    resolve();
  }

  private completeImport(recordCount: number) {
    console.info(`${recordCount} rows imported`);
    this.databaseClient.disconnect();
  }

  private async saveOffer(offer: Offer) {
    const user = await this.userService.findOrCreate({
      userName: offer.host.userName,
      email: offer.host.email,
      userType: offer.host.userType,
      password: DEFAULT_USER_PASSWORD
    }, this.hashSalt);

    await this.offerService.create({
      title: offer.title,
      description: offer.description,
      city: {
        cityName: offer.city.cityName,
        latitude: offer.city.latitude,
        longitude: offer.city.longitude,
      },
      previewImage: offer.previewImage,
      houseImages: [...offer.houseImages],
      isPremium: offer.isPremium,
      isFavorite: offer.isFavorite,
      rating: offer.rating,
      houseType: offer.houseType,
      rooms: offer.rooms,
      maxGuests: offer.maxGuests,
      rentCost: offer.rentCost,
      amenities: [...offer.amenities],
      host: user.id,
    });
  }


  public getName(): string {
    return '--import';
  }

  public async execute(
    file: string,
    login: string,
    password: string,
    hostname: string,
    database: string,
    salt: string
  ): Promise<void> {
    const uri = getMongoURI(login, password, hostname, DATABASE_PORT, database);
    this.hashSalt = salt;

    await this.databaseClient.connect(uri);

    const fileReader = new TSVFileReader(file.trim());

    fileReader.on('line', this.handleLineImport);
    fileReader.on('end', this.completeImport);

    try {
      await fileReader.read();
    } catch (error) {
      if (!(error instanceof Error)) {
        throw error;
      }

      console.error(chalk.red(`Can't import data from file: ${file}`));
      console.error(chalk.red(getErrorMessage(error)));
    }
  }
}


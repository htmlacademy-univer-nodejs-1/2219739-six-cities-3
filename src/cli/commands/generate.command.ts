import { Command } from './command.interface';
import { MockServerData } from '../../shared/types';
import axios from 'axios';
import { generateOffer } from '../../shared/libs/mock-generator';
import { TSVFileWriter } from '../../shared/libs/file-writer';

export class DataGenerateCommand implements Command {
  private fetchedData: MockServerData;

  private async fetchInitialData(apiEndpoint: string): Promise<void> {
    try {
      const response = await axios.get<MockServerData>(apiEndpoint);
      this.fetchedData = response.data;
    } catch (error: unknown) {
      throw new Error(`Failed to fetch data from ${apiEndpoint}: ${error instanceof Error ? error.message : error}`);
    }
  }

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [numOfOffersStr, outputPath, apiEndpoint] = parameters;
    const numOfOffers = parseInt(numOfOffersStr, 10);

    try {
      await this.fetchInitialData(apiEndpoint);
      const offers = this.generateData(numOfOffers);
      await this.writeToFile(offers, outputPath);
      console.log(`Successfully created ${numOfOffers} offers and saved to ${outputPath}`);
    } catch (error) {
      console.error('Error during data generation:', error instanceof Error ? error.message : error);
    }
  }

  private generateData(count: number): string[] {
    const generatedOffers: string[] = [];

    for (let i = 0; i < count; i++) {
      const offer = generateOffer(this.fetchedData);
      generatedOffers.push(offer);
    }

    return generatedOffers;
  }

  private async writeToFile(offers: string[], outputPath: string): Promise<void> {
    const fileWriter = new TSVFileWriter(outputPath);

    for (const offer of offers) {
      await fileWriter.write(offer);
    }

    fileWriter.close();
  }
}



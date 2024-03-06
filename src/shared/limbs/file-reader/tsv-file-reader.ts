import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, HouseType, Amenity, UserType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    const offers: Offer[] = [];

    for (const row of this.rawData.split('\n')) {
      if (row.trim().length === 0) {
        continue;
      }

      const [
        title,
        description,
        publicationDate,
        previewImage,
        houseImages,
        premium,
        favorite,
        rating,
        houseType,
        rooms,
        guests,
        rentCost,
        amenities,
        commentsCount,
        cityName,
        latitude,
        longitude,
        userName,
        email,
        password,
        userType] = row.split('\t');

      const offer: Offer = {
        title,
        description,
        publicationDate: new Date(publicationDate),
        previewImage,
        houseImages: houseImages.split(','),
        premium: premium === 'true',
        favorite: favorite === 'true',
        rating: parseFloat(rating),
        houseType: HouseType[houseType as 'apartment' | 'house' | 'room' | 'hotel'],
        rooms: parseInt(rooms, 10),
        guests: parseInt(guests, 10),
        rentCost: parseInt(rentCost, 10),
        amenities: amenities
          .split(',')
          .map((amenity) => Amenity[amenity as 'Breakfast' | 'AirConditioning' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge']),
        commentsCount: parseInt(commentsCount, 10),
        city: {cityName, latitude: parseFloat(latitude), longitude: parseFloat(longitude)},
        author: {userName, email, password, userType: UserType[userType as 'ordinary' | 'pro']},
      };

      offers.push(offer);
    }

    return offers;
  }
}

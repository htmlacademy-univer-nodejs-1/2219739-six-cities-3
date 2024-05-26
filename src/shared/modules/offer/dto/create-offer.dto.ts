import {Amenity, City, HouseType, User} from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public publicationDate: Date;
  public previewImage: string;
  public houseImages: string[];
  public premium: boolean;
  public favorite: boolean;
  public rating: number;
  public houseType: HouseType;
  public rooms: number;
  public guests: number;
  public rentCost: number;
  public amenities: Amenity[];
  public city: City;
  public author: User;
}

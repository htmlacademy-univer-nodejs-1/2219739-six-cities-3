import { Amenity, City, HouseType } from '../../../types/index.js';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsObject, Max, MaxLength, Min, MinLength } from 'class-validator';
import { CreateOfferValidationMessage } from './create-offer.message.js';

export class CreateOfferDto {

  @MinLength(10, {message: CreateOfferValidationMessage.title.minLength})
  @MaxLength(100, {message: CreateOfferValidationMessage.title.maxLength})
  public title: string;

  @MinLength(20, {message: CreateOfferValidationMessage.description.minLength})
  @MaxLength(1024, {message: CreateOfferValidationMessage.description.maxLength})
  public description: string;

  @IsObject({message: CreateOfferValidationMessage.city.invalid})
  public city: City;

  public previewImage: string;

  @IsArray({message: CreateOfferValidationMessage.houseImages.invalidFormat})
  public houseImages: string[];

  @IsBoolean({message: CreateOfferValidationMessage.isPremium.invalidFormat})
  public isPremium: boolean;

  @IsBoolean({message: CreateOfferValidationMessage.isFavorite.invalidFormat})
  public isFavorite: boolean;

  @Min(1, {message: CreateOfferValidationMessage.rating.minValue})
  @Max(5, {message: CreateOfferValidationMessage.rating.maxValue})
  @IsNumber({maxDecimalPlaces: 1}, {message: CreateOfferValidationMessage.rating.invalidFormat})
  public rating: number;

  @IsEnum(HouseType, {message: CreateOfferValidationMessage.houseType.invalid})
  public houseType: HouseType;

  @Min(1, {message: CreateOfferValidationMessage.rooms.minValue})
  @Max(8, {message: CreateOfferValidationMessage.rooms.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.rooms.invalidFormat})
  public rooms: number;

  @Min(1, {message: CreateOfferValidationMessage.maxGuests.minValue})
  @Max(10, {message: CreateOfferValidationMessage.maxGuests.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.maxGuests.invalidFormat})
  public maxGuests: number;

  @Min(100, {message: CreateOfferValidationMessage.rentCost.minValue})
  @Max(1000000, {message: CreateOfferValidationMessage.rentCost.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.rentCost.invalidFormat})
  public rentCost: number;

  @IsArray({message: CreateOfferValidationMessage.amenities.invalidFormat})
  @IsEnum(Amenity, {each: true, message: CreateOfferValidationMessage.amenities.invalidAmenityFormat})
  public amenities: Amenity[];

  public host: string;
}

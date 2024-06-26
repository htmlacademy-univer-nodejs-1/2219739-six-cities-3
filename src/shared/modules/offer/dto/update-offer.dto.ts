import { Amenity, City, HouseType } from '../../../types/index.js';
import { IsArray, IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsObject, Max, MaxLength, Min, MinLength } from 'class-validator';
import { UpdateOfferValidationMessage } from './update-offer.message.js';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, {message: UpdateOfferValidationMessage.title.minLength})
  @MaxLength(100, {message: UpdateOfferValidationMessage.title.maxLength})
  public title?: string;

  @IsOptional()
  @MinLength(20, {message: UpdateOfferValidationMessage.description.minLength})
  @MaxLength(1024, {message: UpdateOfferValidationMessage.description.maxLength})
  public description?: string;

  @IsOptional()
  @IsDateString({}, {message: UpdateOfferValidationMessage.publicationDate.invalidFormat})
  public publicationDate?: Date;

  @IsObject({message: UpdateOfferValidationMessage.city.invalid})
  public city?: City;

  @IsOptional()
  public previewImage?: string;

  @IsOptional()
  @IsArray({message: UpdateOfferValidationMessage.houseImages.invalidFormat})
  public houseImages?: string[];

  @IsOptional()
  @IsBoolean({message: UpdateOfferValidationMessage.isPremium.invalidFormat})
  public isPremium?: boolean;

  @IsOptional()
  @IsBoolean({message: UpdateOfferValidationMessage.isFavorite.invalidFormat})
  public isFavorite?: boolean;

  @IsOptional()
  @Min(1, {message: UpdateOfferValidationMessage.rating.minValue})
  @Max(5, {message: UpdateOfferValidationMessage.rating.maxValue})
  @IsNumber({maxDecimalPlaces: 1}, {message: UpdateOfferValidationMessage.rating.invalidFormat})
  public rating?: number;

  @IsOptional()
  @IsEnum(HouseType, {message: UpdateOfferValidationMessage.houseType.invalid})
  public houseType?: HouseType;

  @IsOptional()
  @Min(1, {message: UpdateOfferValidationMessage.rooms.minValue})
  @Max(8, {message: UpdateOfferValidationMessage.rooms.maxValue})
  @IsNumber({}, {message: UpdateOfferValidationMessage.rooms.invalidFormat})
  public rooms?: number;

  @IsOptional()
  @Min(1, {message: UpdateOfferValidationMessage.maxGuests.minValue})
  @Max(10, {message: UpdateOfferValidationMessage.maxGuests.maxValue})
  @IsNumber({}, {message: UpdateOfferValidationMessage.maxGuests.invalidFormat})
  public maxGuests?: number;

  @IsOptional()
  @Min(100, {message: UpdateOfferValidationMessage.rentCost.minValue})
  @Max(1000000, {message: UpdateOfferValidationMessage.rentCost.maxValue})
  @IsNumber({}, {message: UpdateOfferValidationMessage.rentCost.invalidFormat})
  public rentCost?: number;

  @IsOptional()
  @IsArray({message: UpdateOfferValidationMessage.amenities.invalidFormat})
  @IsEnum(Amenity, {each: true, message: UpdateOfferValidationMessage.amenities.invalidAmenityFormat})
  public amenities?: Amenity[];
}

import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Amenity, City, HouseType } from '../../types/index.js';
import { UserEntity } from '../user/index.js';

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    type: () => String,
  })
  public title: string;

  @prop({
    trim: true,
    required: true,
    type: () => String,
  })
  public description: string;

  @prop({
    required: true,
    type: () => Date,
  })
  public publicationDate: Date;

  @prop({
    required: true,
    type: () => Object,
  })
  public city: City;

  @prop({
    required: true,
    type: () => String,
  })
  public previewImage: string;

  @prop({
    required: true,
    default: [],
    type: () => Array<string>,
  })
  public houseImages: string[];

  @prop({
    required: true,
    type: () => Boolean,
  })
  public isPremium: boolean;

  @prop({
    required: true,
    type: () => Boolean,
  })
  public isFavorite: boolean;

  @prop({
    required: true,
    type: () => Number,
  })
  public rating: number;

  @prop({
    required: true,
    type: () => String,
    enum: HouseType
  })
  public houseType: HouseType;

  @prop({
    required: true,
    type: () => Number,
  })
  public rooms: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public maxGuests: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public rentCost: number;

  @prop({
    required: true,
    type: () => Array<string>,
  })
  public amenities: Amenity[];

  @prop({
    required: true,
    ref: UserEntity,
  })
  public host: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);

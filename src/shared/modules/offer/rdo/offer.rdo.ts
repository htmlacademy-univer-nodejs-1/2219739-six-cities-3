import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';
import { City } from '../../../types/index.js';

export class OfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public publicationDate: string;

  @Expose()
  public city: City;

  @Expose()
  public previewImage: string;

  @Expose()
  public houseImages: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public houseType: string;

  @Expose()
  public rooms: number;

  @Expose()
  public maxGuests: number;

  @Expose()
  public rentCost: number;

  @Expose()
  public amenities: string[];

  @Expose({ name: 'host'})
  @Type(() => UserRdo)
  public host: UserRdo;

  @Expose()
  public commentCount: number;
}

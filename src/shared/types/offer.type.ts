import { User } from './user.type.js';
import { City } from './city.type.js';
import { HouseType } from './house-type.enum.js';
import { Amenity } from './amenity.enum.js';

export type Offer = {
    title: string;
    description: string;
    publicationDate: Date;
    previewImage: string;
    houseImages: string[];
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    houseType: HouseType;
    rooms: number;
    maxGuests: number;
    rentCost: number;
    amenities: Amenity[];
    city: City;
    host: User;
}

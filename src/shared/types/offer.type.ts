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
    premium: boolean;
    favorite: boolean;
    rating: number;
    houseType: HouseType;
    rooms: number;
    guests: number;
    rentCost: number;
    amenities: Amenity[];
    commentsCount: number;
    city: City;
    author: User;
}

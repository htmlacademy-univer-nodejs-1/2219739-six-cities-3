import { Offer, HouseType, Amenity, UserType } from '../../shared/types/index.js';

export function createOffer(offerData: string): Offer {
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
    cityName,
    latitude,
    longitude,
    userName,
    email,
    password,
    userType] = offerData.replace('\n', '').split('\t');

  const offer: Offer = {
    title,
    description,
    publicationDate: new Date(publicationDate),
    previewImage,
    houseImages: houseImages.split(','),
    premium: premium === 'true',
    favorite: favorite === 'true',
    rating: parseFloat(rating),
    houseType: houseType as HouseType,
    rooms: parseInt(rooms, 10),
    guests: parseInt(guests, 10),
    rentCost: parseInt(rentCost, 10),
    amenities: amenities
      .split(',')
      .map((amenity) => amenity as Amenity),
    city: {
      cityName,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    },
    author: {
      userName,
      email,
      password,
      userType: userType as UserType,
    },
  };

  return offer;
}


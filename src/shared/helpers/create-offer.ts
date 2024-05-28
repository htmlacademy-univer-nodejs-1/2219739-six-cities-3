import { Offer, HouseType, Amenity, UserType, CityName } from '../../shared/types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    publicationDate,
    previewImage,
    houseImages,
    isPremium,
    isFavorite,
    rating,
    houseType,
    rooms,
    maxGuests,
    rentCost,
    amenities,
    cityName,
    latitude,
    longitude,
    userName,
    avatarUrl,
    email,
    userType] = offerData.replace('\n', '').split('\t');

  const offer: Offer = {
    title,
    description,
    publicationDate: new Date(publicationDate),
    previewImage,
    houseImages: houseImages.split(','),
    isPremium: isPremium.toLowerCase() === 'true',
    isFavorite: isFavorite.toLowerCase() === 'true',
    rating: parseFloat(rating),
    houseType: houseType as HouseType,
    rooms: parseInt(rooms, 10),
    maxGuests: parseInt(maxGuests, 10),
    rentCost: parseInt(rentCost, 10),
    amenities: amenities
      .split(',')
      .map((amenity) => amenity as Amenity),
    city: {
      cityName: cityName as CityName,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    },
    host: {
      userName,
      email,
      avatarUrl,
      userType: userType as UserType,
    },
  };

  return offer;
}


import {Amenity, City , HouseType, UserType, MockServerData} from '../../types/index.js';
import {getRandomNumber, getRandomElement, getRandomElements, getRandomDate} from '../../helpers/index.js';

const CITIES: City[] = [
  { cityName: 'Paris', latitude: 48.85661, longitude: 2.351499 },
  { cityName: 'Cologne', latitude: 50.938361, longitude: 6.959974 },
  { cityName: 'Brussels', latitude: 50.846557, longitude: 4.351697 },
  { cityName: 'Amsterdam', latitude: 52.370216, longitude: 4.895168 },
  { cityName: 'Hamburg', latitude: 53.550341, longitude: 10.000654 },
  { cityName: 'Dusseldorf', latitude: 51.225402, longitude: 6.776314 }
];

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_ROOMS = 1;
const MAX_ROOM = 8;

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const MIN_RENT_COST = 100;
const MAX_RENT_COST = 100000;


export function generateOffer(mockData: MockServerData): string {
  const title = getRandomElement<string>(mockData.titles);
  const description = getRandomElement<string>(mockData.descriptions);
  const publicationDate = getRandomDate();
  const city = getRandomElement(CITIES);
  const previewImage = getRandomElement<string>(mockData.previewImages);
  const houseImages = getRandomElements<string[]>(mockData.houseImages).join(';');
  const premium = getRandomElement<string>(['true', 'false']);
  const favorite = getRandomElement<string>(['true', 'false']);
  const rating = getRandomNumber(MIN_RATING, MAX_RATING).toString();
  const houseType = getRandomElement([
    HouseType.Apartment,
    HouseType.Hotel,
    HouseType.House,
    HouseType.Room
  ]);
  const rooms = getRandomNumber(MIN_ROOMS, MAX_ROOM).toString();
  const guests = getRandomNumber(MIN_GUESTS, MAX_GUESTS).toString();
  const rentCost = getRandomNumber(MIN_RENT_COST, MAX_RENT_COST).toString();
  const amenities = getRandomElements([
    Amenity.AirConditioning,
    Amenity.Fridge,
    Amenity.Towels,
    Amenity.BabySeat,
    Amenity.Washer,
    Amenity.Breakfast,
    Amenity.LaptopFriendlyWorkspace
  ]).join(';');
  const userName = getRandomElement<string>(mockData.userNames);
  const email = getRandomElement<string>(mockData.emails);
  const avatar = getRandomElement<string>(mockData.avatars);
  const password = getRandomElement<string>(mockData.passwords);
  const userType = getRandomElement([
    UserType.Ordinary,
    UserType.Pro
  ]);

  const {cityName, latitude, longitude} = city;

  return [
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
    avatar,
    email,
    password,
    userType
  ].join('\t');
}

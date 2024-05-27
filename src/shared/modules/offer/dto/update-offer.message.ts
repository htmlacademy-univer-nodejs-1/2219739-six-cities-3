export const UpdateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  publicationDate: {
    invalidFormat: 'postDatepublicationDate must be a valid ISO date',
  },
  city: {
    invalid: 'city must be value from City Enum',
  },
  houseImages: {
    invalidFormat: 'Images must be an array',
  },
  premium: {
    invalidFormat: 'Must be Boolean',
  },
  favorite: {
    invalidFormat: 'Must be Boolean',
  },
  rating: {
    minValue: 'Minimum rentCost is 1',
    maxValue: 'Maximum rentCost is 5',
    invalidFormat: 'Must be Number',
  },
  houseType: {
    invalid: 'houseType must be value from HouseType Enum',
  },
  rooms: {
    minValue: 'Minimum rooms is 1',
    maxValue: 'Maximum rooms is 8',
    invalidFormat: 'Must be Number',
  },
  guests: {
    minValue: 'Minimum guests is 1',
    maxValue: 'Maximum guests is 10',
    invalidFormat: 'Must be Number',
  },
  rentCost: {
    minValue: 'Minimum rentCost is 100',
    maxValue: 'Maximum rentCost is 100000',
    invalidFormat: 'rentCost must be an Number',
  },
  amenities: {
    invalidFormat: 'Must be an array',
    invalidAmenityFormat: 'amenity must be value from Amenity Enum'
  }
} as const;

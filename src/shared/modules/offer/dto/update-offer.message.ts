export const UpdateOfferValidationMessage = {
  title: {
    minLength: 'Минимальная длина 10',
    maxLength: 'Максимальная длина 100',
  },
  description: {
    minLength: 'Минимальная длина 20',
    maxLength: 'Максимальная длина 1024',
  },
  publicationDate: {
    invalidFormat: 'Должен иметь тип valid ISO date',
  },
  city: {
    invalid: 'Должен иметь тип Object',
  },
  houseImages: {
    invalidFormat: 'Должен иметь тип Array',
  },
  isPremium: {
    invalidFormat: 'Должен иметь тип Boolean',
  },
  isFavorite: {
    invalidFormat: 'Должен иметь тип Boolean',
  },
  rating: {
    minValue: 'Минимальное значение 1',
    maxValue: 'Максимальное значение 5',
    invalidFormat: 'Должен иметь тип Number',
  },
  houseType: {
    invalid: 'houseType must be value from HouseType Enum',
  },
  rooms: {
    minValue: 'Минимальное значение 1',
    maxValue: 'Максимальное значение 8',
    invalidFormat: 'Должен иметь тип Number',
  },
  maxGuests: {
    minValue: 'Минимальное значение 1',
    maxValue: 'Максимальное значение 10',
    invalidFormat: 'Должен иметь тип Number',
  },
  rentCost: {
    minValue: 'Минимальное значение 100',
    maxValue: 'Максимальное значение 100000',
    invalidFormat: 'Должен иметь тип Number',
  },
  amenities: {
    invalidFormat: 'Должен иметь тип array',
    invalidAmenityFormat: 'amenity must be value from Amenity Enum'
  }
} as const;

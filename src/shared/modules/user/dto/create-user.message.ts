export const CreateUserMessage = {
  userName: {
    invalidFormat: 'name is required',
    lengthField: 'Минимальная длина 1, максимальная 15',
  },
  email: {
    invalidFormat: 'email должен быть валидным'
  },
  userType: {
    invalidFormat: 'Должен иметь тип UserType'
  },
  password: {
    invalidFormat: 'password is required',
    lengthField: 'Минимальная длина 6, максимальная 12'
  },
} as const;

export const CreateCommentMessage = {
  comment: {
    invalidFormat: 'comment is required',
    lengthField: 'Минимальная длина 5, максимальная 2024'
  },
  rating: {
    minValue: 'Минимальное значение 1',
    maxValue: 'Максимальное значение 5',
    invalidFormat: 'Должен быть тип Number',
  }
} as const;

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { ValidationError } from 'class-validator';
import { ApplicationError, ValidationErrorField } from '../libs/rest/index.js';

export function getRandomNumber(min: number, max: number): number {
  if (min >= max) {
    throw new Error('Minimum value must be less than maximum value.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function getRandomElement<Type>(array: Type[]) : Type {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomElements<Type>(array: Type[]) : Type[] {
  const start = getRandomNumber(0, array.length - 1);
  const end = start + getRandomNumber(start, array.length - 1);
  return array.slice(start, end);
}

export function getRandomDate(): string {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
  const endDate = currentDate;
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  if (!(randomDate instanceof Date) || isNaN(randomDate.getTime())) {
    throw new Error('Failed to generate random date.');
  }
  return randomDate.toISOString();
}


export function getCurrentDirectory(): string {
  const filepath = fileURLToPath(import.meta.url);
  return dirname(filepath);
}

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '';
}

export function fillDTO<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, {excludeExtraneousValues: true});
}

export function createErrorObject(errorType: ApplicationError, error: string, details: ValidationErrorField[] = []) {
  return {
    errorType,
    error,
    details
  };
}

export function reduceValidationErrors(errors: ValidationError[]): ValidationErrorField[] {
  return errors.map(({property, value, constraints}) => ({
    property,
    value,
    messages: constraints ? Object.values(constraints) : []
  }));
}

export function getFullServerPath(host: string, port: number) {
  return `http://${host}:${port}`;
}

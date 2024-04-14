import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export function getRandomNumber(min: number, max: number) : number {
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
  return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())).toISOString();
}

export function getCurrentDirectory(): string {
  const filepath = fileURLToPath(import.meta.url);
  return dirname(filepath);
}

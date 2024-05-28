import convict from 'convict';
import validator from 'convict-format-with-validator';

convict.addFormats(validator);

export type ConfigSchema = {
  PORT: number;
  SALT: string;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_NAME: string;
  UPLOAD_DIRECTORY: string;
  JWT_SECRET: string;
  HOST: string;
  STATIC_DIRECTORY: string;
}

export const configRestSchema = convict<ConfigSchema>({
  PORT: {
    doc: 'Порт для входящего соединения',
    format: 'port',
    env: 'PORT',
    default: 3000
  },
  SALT: {
    doc: 'Соль для хеширования пароля',
    format: String,
    env: 'SALT',
    default: null
  },
  DB_HOST: {
    doc: 'IP-адрес сервера базы данных (MongoDB)',
    format: 'ipaddress',
    env: 'DB_HOST',
    default: '127.0.0.1'
  },
  DB_USER: {
    doc: 'Имя пользователя для подключения к базе данных',
    format: String,
    env: 'DB_USER',
    default: null
  },
  DB_PASSWORD: {
    doc: 'Пароль для подключения к базе данных',
    format: String,
    env: 'DB_PASSWORD',
    default: null
  },
  DB_PORT: {
    doc: 'Порт для подключения к базе данных (MongoDB)',
    format: 'port',
    env: 'DB_PORT',
    default: '27017'
  },
  DB_NAME: {
    doc: 'Имя базы данных (MongoDB)',
    format: String,
    env: 'DB_NAME',
    default: 'six-cities'
  },
  UPLOAD_DIRECTORY: {
    doc: 'Каталог для загрузки файлов',
    format: String,
    env: 'UPLOAD_DIRECTORY',
    default: null
  },
  JWT_SECRET: {
    doc: 'JWT секрет',
    format: String,
    env: 'JWT_SECRET',
    default: null
  },
  HOST: {
    doc: 'Хост, на котором запущено приложение',
    format: String,
    env: 'HOST',
    default: 'localhost'
  },
  STATIC_DIRECTORY: {
    doc: 'Путь к каталогу со статическими ресурсами',
    format: String,
    env: 'STATIC_DIRECTORY_PATH',
    default: 'static'
  },
});


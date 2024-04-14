import { Logger } from './logger.interface.js';
import { Logger as PinoInstance, pino, transport } from 'pino';
import chalk from 'chalk';
import { resolve } from 'node:path';
import { getCurrentDirectory } from '../../helpers/index.js';
import { injectable } from 'inversify';

@injectable()
export class ConsoleLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    const modulePath = getCurrentDirectory();
    const logFilePath = 'logs/rest.log';
    const destination = resolve(modulePath, '../../../', logFilePath);

    const fileTransport = transport({
      targets: [
        {
          target: 'pino/file',
          options: {destination},
          level: 'debug'
        },
        {
          target: 'pino/file',
          options: {},
          level: 'info'
        }
      ]
    });

    this.logger = pino({}, fileTransport);
  }

  info(message: string, ...args: unknown[]): void {
    console.log(chalk.blue(`INFO: ${message}`), ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    console.log(chalk.yellow(`WARN: ${message}`), ...args);
  }

  error(message: string, error: Error, ...args: unknown[]): void {
    console.log(chalk.red(`ERROR: ${message}`), error, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    console.log(chalk.gray(`DEBUG: ${message}`), ...args);
  }
}

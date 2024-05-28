import { Logger } from './logger.interface.js';
import { Logger as PinoInstance, pino, transport } from 'pino';
import chalk from 'chalk';
import { resolve } from 'node:path';
import { getCurrentDirectory } from '../../helpers/index.js';
import { injectable } from 'inversify';
import fs from 'node:fs';

@injectable()
export class ConsoleLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    const modulePath = getCurrentDirectory();
    const logFileName = 'rest.log';
    const logFilePath = resolve(modulePath, '../../../logs', logFileName);

    const logsFolder = resolve(modulePath, '../../../logs');
    if (!fs.existsSync(logsFolder)) {
      fs.mkdirSync(logsFolder);
    }

    const fileTransport = transport({
      targets: [
        {
          target: 'pino/file',
          options: { destination: logFilePath },
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
    this.logger.info({ msg: message, args });
    console.log(chalk.blue(`INFO: ${message}`), ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.logger.warn({ msg: message, args });
    console.log(chalk.yellow(`WARN: ${message}`), ...args);
  }

  error(message: string, error: Error, ...args: unknown[]): void {
    this.logger.error({ msg: message, error, args });
    console.log(chalk.red(`ERROR: ${message}`), error, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    this.logger.debug({ msg: message, args });
    console.log(chalk.gray(`DEBUG: ${message}`), ...args);
  }
}

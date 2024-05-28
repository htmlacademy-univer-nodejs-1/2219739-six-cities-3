import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import chalk from 'chalk';
import { Command } from './command.interface.js';

export class AppVersionCommand implements Command {
  constructor(private readonly filePath: string = './package.json') {}

  public getName(): string {
    return '--version';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    try {
      const fileContent = readFileSync(resolve(this.filePath), 'utf-8');
      const { version } = JSON.parse(fileContent);
      console.info(chalk.green(version));
    } catch (error) {
      console.error(chalk.red(`Failed to read version from ${this.filePath}`));

      if (error instanceof Error) {
        console.error(chalk.red(error.message));
      }
    }
  }
}


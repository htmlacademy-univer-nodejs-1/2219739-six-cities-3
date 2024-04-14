import { Command } from './command.interface.js';
import { TSVFileReader } from '../../shared/limbs/file-reader/index.js';
import chalk from 'chalk';
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...parameters: string[]): void {
    const [filepath] = parameters;
    const fileReader = new TSVFileReader(filepath.trim());

    try {
      const inputStream = createReadStream(filepath);
      const rl = createInterface({
        input: inputStream,
        crlfDelay: Infinity,
      });

      rl.on('line', (line: string) => {
        const data = fileReader.parseLine(line);
        console.log(data);
      });

      rl.on('close', () => {
        console.log(chalk.green(`Import from file ${filepath} has been completed.`));
      });

      rl.on('error', (err) => {
        console.error(chalk.red(`Error reading file ${filepath}: ${err.message}`));
      });
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(chalk.red(`Can't import data from file: ${filepath}`));
      console.error(chalk.red(`Details: ${err.message}`));
    }
  }
}


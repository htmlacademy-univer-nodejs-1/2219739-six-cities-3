import { FileReader } from './file-reader.interface.js';
import { createReadStream } from 'node:fs';
import { EventEmitter } from 'node:events';
import { createInterface } from 'node:readline';

export class TSVFileReader extends EventEmitter implements FileReader {
  private readonly filepath: string;

  constructor(filepath: string) {
    super();
    this.filepath = filepath;
  }

  public read(): void {
    const rl = createInterface({
      input: createReadStream(this.filepath),
      crlfDelay: Infinity,
    });

    rl.on('line', (line: string) => {
      const data = this.parseLine(line);
      this.emit('data', data);
    });

    rl.on('close', () => {
      this.emit('end');
    });

    rl.on('error', (error: Error) => {
      this.emit('error', error);
    });
  }

  public parseLine(line: string): string[] {
    return line.split('\t');
  }
}


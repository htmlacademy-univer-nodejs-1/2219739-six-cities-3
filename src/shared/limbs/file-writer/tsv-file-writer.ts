import { FileWriter } from './file-writer.interface';
import { createWriteStream, WriteStream } from 'node:fs';

export class TSVFileWriter implements FileWriter {
  private stream: WriteStream;

  constructor(filename: string) {
    this.stream = createWriteStream(filename, {
      flags: 'w',
      encoding: 'utf-8',
      autoClose: true,
    });
  }

  public async write(row: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.stream.write(`${row}\n`, (error?: Error | null) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  public close(): void {
    this.stream.end();
  }
}

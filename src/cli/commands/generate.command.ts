import { Command } from './command.interface';
import { MockServerData } from '../../shared/types';
import axios from 'axios';
import { generateOffer } from '../../shared/libs/mock-generator';
import { TSVFileWriter } from '../../shared/libs/file-writer';

export class GenerateCommand implements Command {
  private initialData: MockServerData;

  private async loadData(url: string): Promise<void> {
    try {
      const response = await axios.get<MockServerData>(url);
      this.initialData = response.data;
    } catch (error: unknown) {
      throw new Error(`Failed to load data from ${url}: ${error instanceof Error ? error.message : error}`);
    }
  }

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [offerCountStr, filepath, url] = parameters;
    const count = parseInt(offerCountStr, 10);

    try {
      await this.loadData(url);
      const generatedData = this.generateData(count);
      await this.saveToFile(generatedData, filepath);
      console.log(`Successfully generated ${count} offers and saved to ${filepath}`);
    } catch (error) {
      console.error('Failed to generate data:', error instanceof Error ? error.message : error);
    }
  }

  private generateData(count: number): string[] {
    const generatedOffers: string[] = [];

    for (let i = 0; i < count; i++) {
      const offer = generateOffer(this.initialData);
      generatedOffers.push(offer);
    }

    return generatedOffers;
  }

  private async saveToFile(data: string[], filepath: string): Promise<void> {
    const writer = new TSVFileWriter(filepath);

    for (const line of data) {
      await writer.write(line);
    }

    writer.close();
  }
}



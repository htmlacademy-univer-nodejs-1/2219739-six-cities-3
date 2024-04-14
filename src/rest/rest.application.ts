import { Logger } from '../shared/limbs/logger/index.js';
import { Config, ConfigSchema } from '../shared/limbs/config/index.js';
import { inject, injectable } from 'inversify';
import { Component } from '../shared/types/index.js';

@injectable()
export class Application {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<ConfigSchema>,
  ) {}

  public init(): void {
    this.logger.info('Application initialized.');
    const port = this.config.get('PORT');
    this.logger.info(`Port number from env: ${port}`);
  }
}

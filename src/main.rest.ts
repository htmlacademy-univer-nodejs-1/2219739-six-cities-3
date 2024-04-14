import 'reflect-metadata';
import { Logger, ConsoleLogger } from './shared/limbs/logger/index.js';
import { Application } from './rest/index.js';
import { Config, RestConfig, ConfigSchema } from './shared/limbs/config/index.js';
import { Container } from 'inversify';
import { Component } from './shared/types/index.js';

async function initApp() {
  const container = new Container();
  container.bind<Application>(Component.Application).to(Application).inSingletonScope();
  container.bind<Logger>(Component.Logger).to(ConsoleLogger).inSingletonScope();
  container.bind<Config<ConfigSchema>>(Component.Config).to(RestConfig).inSingletonScope();

  const application = container.get<Application>(Component.Application);
  await application.init();
}

initApp();

import { Container } from 'inversify';
import { Application } from './rest.application.js';
import { DatabaseClient, MongoDatabaseClient } from '../shared/libs/database-client/index.js';
import { Logger, ConsoleLogger } from '../shared/libs/logger/index.js';
import { Component } from '../shared/types/index.js';
import { Config, RestConfig, ConfigSchema } from '../shared/libs/config/index.js';
import { AppExceptionFilter, ExceptionFilter, HttpErrorExceptionFilter } from '../shared/libs/rest/index.js';
import { ValidationExceptionFilter } from '../shared/libs/rest/exception-filter/validation.exception-filter.js';
import { PathTransformer } from '../shared/libs/rest/transform/path-transformer.js';

export function createApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<Application>(Component.Application).to(Application).inSingletonScope();
  restApplicationContainer.bind<Logger>(Component.Logger).to(ConsoleLogger).inSingletonScope();
  restApplicationContainer.bind<Config<ConfigSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restApplicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();

  restApplicationContainer.bind<ExceptionFilter>(Component.ExceptionFilter).to(AppExceptionFilter).inSingletonScope();
  restApplicationContainer.bind<ExceptionFilter>(Component.HttpExceptionFilter).to(HttpErrorExceptionFilter).inSingletonScope();
  restApplicationContainer.bind<ExceptionFilter>(Component.ValidationExceptionFilter).to(ValidationExceptionFilter).inSingletonScope();
  restApplicationContainer.bind<PathTransformer>(Component.PathTransformer).to(PathTransformer).inSingletonScope();

  return restApplicationContainer;
}

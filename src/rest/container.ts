import {Container} from 'inversify';
import {RestApplication} from './rest.application.js';
import {DatabaseClient, MongoDatabaseClient} from '../shared/limbs/database-client/index.js';
import {Logger, PinoLogger} from '../shared/limbs/logger/index.js';
import {Component} from '../shared/types/index.js';
import {Config, RestConfig, RestSchema} from '../shared/limbs/config/index.js';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope();
  restApplicationContainer.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  restApplicationContainer.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restApplicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();

  return restApplicationContainer;
}

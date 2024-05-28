import 'reflect-metadata';
import { Application } from './rest/index.js';
import { Container } from 'inversify';
import { Component } from './shared/types/index.js';
import { createApplicationContainer } from './rest/rest.container.js';
import { createUserContainer } from './shared/modules/user/user.container.js';
import { createOfferContainer } from './shared/modules/offer/index.js';
import { createCommentContainer } from './shared/modules/comment/index.js';
import { createAuthContainer } from './shared/modules/auth/index.js';

async function bootstrap() {
  const appContainer = Container.merge(
    createApplicationContainer(),
    createUserContainer(),
    createOfferContainer(),
    createCommentContainer(),
    createAuthContainer(),
  );

  const application = appContainer.get<Application>(Component.Application);
  await application.init();
}

bootstrap();

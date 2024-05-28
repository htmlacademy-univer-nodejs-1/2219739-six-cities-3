#!/usr/bin/env node
import 'reflect-metadata';
import { CLIApplication, HelpCommand, DataImportCommand, AppVersionCommand, DataGenerateCommand } from './cli/index.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new AppVersionCommand(),
    new DataImportCommand(),
    new DataGenerateCommand(),
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validateEnvironmentVars } from './config/configuration';

async function bootstrap(): Promise<void> {
    validateEnvironmentVars();
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const port = configService.get('server.port');
    await app.listen(port as number);
    Logger.log(`Appplication started on port: ${port}`);
}

export default bootstrap;

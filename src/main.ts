import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './module/app.module';
import { resolve } from 'path';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); //config for MVC method
  // await app.listen(process.env.PORT ?? 3000);

  app.useStaticAssets(resolve(`./src/public`)); //path for looking for public itens
  app.setBaseViewsDir(resolve(`./src/views`)); //path for looking for views
  app.setViewEngine(`hbs`); //set the engine for render pages

  app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Rodando em http://localhost:${port}.`);
  });
}
bootstrap();

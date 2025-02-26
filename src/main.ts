import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './module/app.module';
import { join } from 'path';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // await app.listen(process.env.PORT ?? 3000);

  app.useStaticAssets(join(__dirname, `..`, `public`));
  app.setBaseViewsDir(join(__dirname, `..`, `views`));
  app.setViewEngine(`hbs`);

  app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Rodando em http://localhost:${port}.`);
  });
}
bootstrap();

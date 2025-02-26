import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);
  app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Rodando em http://localhost:${port}.`);
  });
}
bootstrap();

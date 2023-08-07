import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { PostsModule } from './posts/posts.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);


  const config = new DocumentBuilder()
    .setTitle('Debag example')
    .setDescription('The Debag Geraete API description')
    .setVersion('1.0')
    .addTag('User und Geratelist')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

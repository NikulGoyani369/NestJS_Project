import { Module } from '@nestjs/common';
import { PostControllerController } from './post-controller/post-UserController';
import {PostGeraeteController} from './post-controller/post-GarateController'
import { NikulController } from './post-controller/nikul-controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[MongooseModule.forRoot('mongodb://localhost/authentication')],
  controllers: [PostControllerController,PostGeraeteController,NikulController]
})
export class PostsModule {}

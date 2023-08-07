import { Module } from '@nestjs/common';
import { PostControllerController } from './post-controller/post-UserController';
import {PostGeraeteController} from './post-controller/post-GarateController'
@Module({
  controllers: [PostControllerController,PostGeraeteController]
})
export class PostsModule {}

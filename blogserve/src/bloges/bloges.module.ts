import { Module } from '@nestjs/common';
import { BlogesController } from './bloges.controller';
import { BlogesService } from './bloges.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Bloge } from './bloge.entity';


@Module({
  imports:[TypegooseModule.forFeature([Bloge])],
  controllers: [BlogesController],
  providers: [BlogesService]
})
export class BlogesModule {}

import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Category } from './category.entity';

@Module({
  imports:[TypegooseModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}

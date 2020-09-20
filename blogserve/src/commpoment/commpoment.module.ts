import { Module } from '@nestjs/common';
import { CommpomentController } from './commpoment.controller';
import { CommpomentService } from './commpoment.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Commpoment } from './commpoments.entity';

@Module({
  imports:[TypegooseModule.forFeature([Commpoment])],
  controllers: [CommpomentController],
  providers: [CommpomentService]
})
export class CommpomentModule {}

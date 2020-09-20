import { Module } from '@nestjs/common';
import { ReplyConpmentController } from './reply-conpment.controller';
import { ReplyConpmentService } from './reply-conpment.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ReplyConpment } from './replyConpment.entity';

@Module({
  imports:[TypegooseModule.forFeature([ReplyConpment])],
  controllers: [ReplyConpmentController],
  providers: [ReplyConpmentService]
})
export class ReplyConpmentModule {}

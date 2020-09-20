import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ReplyConpment } from './replyConpment.entity';

@Injectable()
export class ReplyConpmentService {
    constructor(@InjectModel(ReplyConpment) private readonly replyConpmentMoudel:ReturnModelType<typeof ReplyConpment>){}

    //回复评论
    async createReplyConpment(replyConpment:ReplyConpment):Promise<any>{
        await this.replyConpmentMoudel.create(replyConpment)
        return {
            sucess:true
        }
    }

    //删除评论
    async delReplyConpment(id :string):Promise<any>{
        await this.replyConpmentMoudel.findByIdAndDelete(id)
        return {
            sucess : true
        }
    }
}

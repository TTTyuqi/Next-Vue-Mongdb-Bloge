import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Commpoment } from './commpoments.entity';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CommpomentService {
    constructor(@InjectModel(Commpoment) private readonly commpomentMoudel:ReturnModelType<typeof Commpoment>){}

    //发表评论
    async creatConpoment(conpoment:Commpoment):Promise<any>{
        await this.commpomentMoudel.create(conpoment)
        return{
            success:true
        }
            
    }

    //删除评论
    async deleteConpomentById(id : string):Promise<any>{
        await this.commpomentMoudel.findByIdAndDelete(id)
        return{
            success:true
        }
    }
}

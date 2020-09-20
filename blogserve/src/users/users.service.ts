import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './user.entity';
import { ReturnModelType } from '@typegoose/typegoose';
//导入md5 加密模块
import { compareSync } from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private readonly userMouel:ReturnModelType<typeof User>){}

    //用户注册
    async register(user:User):Promise<any>{
        await this.userMouel.create(user)
        return{
            success:true
        }
    }


    //用户登陆
    async login(userName:string,userPasswd:string):Promise<User | any>{
         //在数据库实例中对userPasswd这个字段设置selectz:fales 默认查询的时候不查询该字段
        const user = await this.userMouel.findOne({userName}).select('+userPasswd')
        if(!user){
            return {
                type:'error',
                message:'用户不存在'
            }
        }
         //验证密码,后台数据库对用户的密码使用bcrypt进行了加密
         const isTure = compareSync(userPasswd,user.userPasswd)
         if(!isTure){
             return {
                type:'error',
                message:'密码错误'
             }
         }
        return user
    }

    //用户需改
    async updateUserById(id:string,user:User):Promise<any>{
        await this.userMouel.findOneAndUpdate(id,user)
        return{
            success : true
        }
    }
}

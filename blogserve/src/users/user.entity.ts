import { prop } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';
//导入md5 加密模块
import { hashSync } from 'bcrypt'

export class User extends TimeStamps{

    @ApiProperty({default:'昵称'})
    @prop({required:true})
    userName!:string;

    @ApiProperty({default:"密码"})
    @prop({required:true,select:false,set:(val:string) => hashSync(val,10),get: (val: string) => val})
    userPasswd!:string;

    @ApiProperty({default:'邮箱'})
    @prop({required:true})
    userEmail!:string;

    @ApiProperty({default:'性别：1 男生，2 女生'})
    @prop()
    sex?:number;

    @ApiProperty({default:'头像'})
    @prop()
    avater?:string

    @ApiProperty({default:'个性标签'})
    @prop()
    personLaber?:string
}
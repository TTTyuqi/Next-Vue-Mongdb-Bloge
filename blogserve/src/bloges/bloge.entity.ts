//创建blog实体
import { prop, mongoose } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { ApiProperty } from '@nestjs/swagger';
export class Bloge extends TimeStamps{

    @ApiProperty({default:'标题'})
    @prop({ required: true })
    blogTitle!:string;

    @ApiProperty({default:'背景'})
    @prop({required: true})
    banner!:string;

    @ApiProperty({default:'分类'})
    @prop({ ref: "Category", refType: mongoose.Schema.Types.ObjectId })
    category!:string;

    @ApiProperty({default:'内容'})
    @prop({required: true})
    blogContent!:string;

    @ApiProperty({default:'用户Id'})
    @prop({ ref: "User", refType: mongoose.Schema.Types.ObjectId })
    userId!:string;

    @ApiProperty({default:'记录浏览数量'})
    @prop()
    viewCount?:number;
}
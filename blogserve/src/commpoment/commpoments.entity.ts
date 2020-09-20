import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { prop, mongoose } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

export class Commpoment extends TimeStamps{

    @ApiProperty({default:'用户编号'})
    @prop({ required:true,ref: 'User',refType:mongoose.Schema.Types.ObjectId})
    userId! : string;

    @ApiProperty({default:"博客编号"})
    @prop({required:true, ref: 'Bloge',refType:mongoose.Schema.Types.ObjectId})
    blogId!:string;

    @ApiProperty({default:'评论内容'})
    @prop({required:true})
    content!:string;

}
import { prop, mongoose } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ApiProperty } from "@nestjs/swagger";

export class ReplyConpment extends TimeStamps{

    @ApiProperty({default:'评论Id'})
    @prop({ref:'Commpoment',refType:mongoose.Schema.Types.ObjectId})
    conpmentId:string;

    @ApiProperty({default:'用户编号'})
    @prop({ref: 'User',refType:mongoose.Schema.Types.ObjectId})
    userId:string;

    @ApiProperty({default:'父级回复评论ID'})
    @prop({ref: 'ReplyConpment',refType:mongoose.Schema.Types.ObjectId})
    parentReplyId:string

    @ApiProperty({default:'回复内容'})
    @prop({required:true})
    replyCotent!:string
}
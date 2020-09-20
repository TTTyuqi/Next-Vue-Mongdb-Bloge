import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

export class Category{

    @ApiProperty({default:'分类名称'})
    @prop({ required: true })
    label!:string
   
}
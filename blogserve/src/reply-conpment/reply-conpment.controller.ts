import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ReplyConpmentService } from './reply-conpment.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReplyConpment } from './replyConpment.entity';

@ApiTags('回复评论相关业务')
@Controller('reply-conpment')
export class ReplyConpmentController {
    constructor(private readonly replyConpmentService : ReplyConpmentService){}

    @ApiOperation({summary:'回复评论'})
    @Post('/creatReplyConpment')
    async creatReplyConpment(@Body() replyConpment : ReplyConpment):Promise<any>{
        return this.replyConpmentService.createReplyConpment(replyConpment)
    }

    @ApiOperation({summary:'删除回复评论'})
    @Get('/delReplyConpment/:id')
    async delReplyConpment(@Param('id') id:string):Promise<any>{
        return this.replyConpmentService.delReplyConpment(id)

    }
}

import { Controller, Body, Post, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CommpomentService } from './commpoment.service';
import { Commpoment } from './commpoments.entity';

@ApiTags('评论相关业务')
@Controller('commpoment')
export class CommpomentController {

    constructor(private readonly commpomentService:CommpomentService){}

    @ApiOperation({summary:'发布评论'})
    @Post('/creatConpoment')
    async creatConpoment(@Body() conpoment:Commpoment):Promise<any>{
        return this.commpomentService.creatConpoment(conpoment)
    }

    @ApiOperation({summary:'删除评论'})
    @Delete('/delConpoment/:id')
    async delConpomentById(@Param('id') id : string):Promise<any>{
        return this.commpomentService.deleteConpomentById(id)
    }

}

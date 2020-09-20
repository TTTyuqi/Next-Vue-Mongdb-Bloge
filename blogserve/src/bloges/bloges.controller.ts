import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { BlogesService } from './bloges.service';
import { Bloge } from './bloge.entity';

@ApiTags('博客相关业务')
@Controller('bloges')
export class BlogesController {
    constructor(private readonly blogesService:BlogesService){}

    @ApiOperation({summary:'获取博客列表'})
    @Get()
    async feachBlog():Promise<Bloge[] | any[]>{
        const data = await this.blogesService.feachBlogServe()
        return data
    }

    @ApiOperation({summary:'创建一个博客'})
    @Post()
    async createBlog(@Body() blog:Bloge){
        // console.log('111',blog)
       return this.blogesService.createBlog(blog)
    }

    @ApiOperation({summary:'查询一个博客'})
    @Get(':id')
    async feachBlogById(@Param('id') id:string):Promise<any>{
        return await this.blogesService.feachBlogById(id)

    }

    @ApiOperation({summary:'编辑博客'})
    @Put(':id')
    async updateBlogById(@Param('id') id :string,@Body() blog:Bloge):Promise<any>{
        return await this.blogesService.updateBlogById(id,blog)
    }

    @ApiOperation({summary:"删除博客"})
    @Delete('id')
    async deletBlogById(@Param('id') id :string):Promise<any>{
        return await this.blogesService.deletBlogById(id)
    }

}

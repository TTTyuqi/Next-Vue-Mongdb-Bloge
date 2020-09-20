import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@ApiTags('分类列表')
@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService:CategoriesService){}

    @ApiOperation({summary:"展示所有分类属性"})
    @Get('/feachAllCategories')
    async feachAllCategories():Promise<Category[]>{
        return await this.categoriesService.feachAllCategory()
    }

    @ApiOperation({summary:'添加博客相关分类'})
    @Post('/createCategory')
    async createCategory(@Body() category:Category):Promise<any>{
        return this.categoriesService.createCategory(category)
    }

}

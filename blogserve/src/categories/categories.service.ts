import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Category } from './category.entity';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private readonly categoryMoudel:ReturnModelType<typeof Category>){}

    //展示所有的分类
    async feachAllCategory():Promise<Category[]>{
        return await this.categoryMoudel.find()
    }

    //新增博客分类属性
    async createCategory(category: Category):Promise<any>{
        await this.categoryMoudel.create(category)
        return {
            success:true
        }
    }
}

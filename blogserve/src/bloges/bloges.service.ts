import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Bloge } from './bloge.entity'
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class BlogesService {
    constructor(@InjectModel(Bloge) private readonly blogeMoudel:ReturnModelType<typeof Bloge>){}

    //获取所有的博客列表
    async feachBlogServe():Promise<Bloge[]| any[]>{
       const blogData = await this.blogeMoudel.aggregate([
        {
            $lookup:{
            //关联的外表
            from :'categories',
            //定义当前对象的ID--本地键
            localField : 'category',
            //定义的关联外表对象的ID--外地键
            foreignField: '_id',
            as: 'category',
            }
        },
        {
            $lookup:{
            //关联的外表
            from :'users',
            //定义当前对象的ID--本地键
            localField : 'userId',
            //定义的关联外表对象的ID--外地键
            foreignField: '_id',
            as: 'userId',
            }
        },
        {
            $lookup:{
            //关联的外表
            from :'commpoments',
            //定义当前对象的ID--本地键
            localField : '_id',
            //定义的关联外表对象的ID--外地键
            foreignField: 'blogId',
            as: 'conpomentCount',
            }
        },
        ]).skip(0).limit(10)
        const blogList = blogData.map((blog) => {
            blog.conpomentCount = blog.conpomentCount.length
            return blog
        })
        return blogList
    }

    //创建一个博客
    async createBlog(blog:Bloge){
        await this.blogeMoudel.create(blog)
        return{
            success:true
        }
    }

    //查询一个博客
    async feachBlogById(id:string):Promise<Bloge>{
        //自动记录该博客的访问量
        await this.blogeMoudel.findByIdAndUpdate(id,{ $inc: { viewCount: 1} })
        
        return await this.blogeMoudel.findById(id)
    }

    //根据id编辑博客
    async updateBlogById(id:string,blog:Bloge):Promise<any>{
        await this.blogeMoudel.findByIdAndUpdate(id,blog)
        return{
            success:true
        }
    }

    //根据id删除博客
    async deletBlogById(id:string):Promise<any>{
        await this.blogeMoudel.findOneAndDelete(id)
        return{
            success:true
        }
    }

}

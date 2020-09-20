import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//链接mongdb数据库
import { TypegooseModule } from 'nestjs-typegoose'
import { BlogesModule } from './bloges/bloges.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { CommpomentModule } from './commpoment/commpoment.module';
import { ReplyConpmentModule } from './reply-conpment/reply-conpment.module';
@Module({
  imports: [TypegooseModule.forRoot('mongodb://localhost:27017/nestvueblog',{useNewUrlParser: true,useUnifiedTopology: true}), BlogesModule, CategoriesModule, UsersModule, CommpomentModule, ReplyConpmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

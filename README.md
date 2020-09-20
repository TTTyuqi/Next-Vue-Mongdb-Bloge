# Next-Vue-Mongdb-Bloge
使用nestjs+vue+mongdb开发的个人博客网站

## Mongodb链接
+ 使用npm 安装相应的模块
> npm install --save mongoose  
> npm install --save-dev @types/mongoose  
> npm install --save nestjs-typegoose  
> npm install @typegoose/typegoose   
```
//链接mongdb数据库
import { TypegooseModule } from 'nestjs-typegoose'
@Module({
  imports: [TypegooseModule.forRoot('mongodb://localhost:27017/nestvueblog',{useNewUrlParser: true,useUnifiedTopology: true})],
})
```

## mongo的连接
+ 进入mongodb安装的bin目录
> /Users/tianyuqi/ProgramFiles/mongodb/bin
+ 使用命令设置mongodb的data/db；log的路径
> ./mongod -f mongodb.conf
+ 启动mongdb
> ./mongo
+ 查看mongodb的进程
> ps -ef | grep mongo
+ 关闭mongodb
> kill pid

+ 使用npm安装mongoose对应的分页插件
> npm install mongoose-paginate

## OpenAPI (Swagger)
+ 接口文档的是使用 npm安装命令
> npm install --save @nestjs/swagger swagger-ui-express  
```

```
## 用户注册，登陆密码的加密和解析
+ 使用npm命令安装,这里使用npm安装bcrypt模块，用于对数据库密码的加密
+ 用户在保存密码的时候为了安全性，不能使用明文保存用户的密码，这时就要对数据库做一层操作，把用户的密码使用散列函数进行加密
> npm install bcrypt  
> select:false 这个属性让数据库自动不会被查出这个字段


## 前端的UI
+ 使用vuecli脚手架工具添加vue-router，和axios
> vue add router

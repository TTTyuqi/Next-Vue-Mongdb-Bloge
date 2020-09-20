import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service'
import { User } from './user.entity';

@ApiTags('用户相关业务')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @ApiOperation({summary:"用户注册"})
    @Post('/register')
    async register(@Body() user:User):Promise<any>{
        return await this.usersService.register(user)
    }

    @ApiOperation({summary:'用户登陆'})
    @Post('/login')
    async login(@Body() user:User):Promise<User | any>{
        const {userName,userPasswd} = user
        return this.usersService.login(userName,userPasswd)
    }

    @ApiOperation({summary:'编辑用户'})
    @Put('/update/:id')
    async uodateUserById(@Param('id') id: string,@Body() user:User):Promise<any>{
        return this.usersService.updateUserById(id,user)
    }


}

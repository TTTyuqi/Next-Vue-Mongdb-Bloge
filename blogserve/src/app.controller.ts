import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger'

@ApiTags('默认')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary:'根访问请求数据--获取所有的blog列表'})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiTags('user')
@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello world response' })
  @ApiResponse({ status: 200, description: 'Hello World Message.' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  @ApiOperation({ summary: 'Get username response' })
  @ApiResponse({ status: 200, description: 'carmina.' })
  getName(): string{
    return this.appService.getName();
  }
}

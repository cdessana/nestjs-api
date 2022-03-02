import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';

@ApiTags('user')
@Controller('user')
export class AppController {

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'Login' })
  async login(@Request() req) {
    return req.user;
  }
}


 
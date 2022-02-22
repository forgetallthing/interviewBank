import { Get, Controller, Response } from '@nestjs/common';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  root(@Response() res) {
    // res.sendFile(join(__dirname, '../public/', 'index.html'));
    return res.render('index.html');
  }
}

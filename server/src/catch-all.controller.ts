import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('*')
export class CatchAllController {
  @Get('*')
  catchAll(@Res() response: Response) {
    const indexHtml = readFileSync(
      join(__dirname, 'client', 'index.html'),
      'utf-8',
    );
    response.send(indexHtml);
  }
}

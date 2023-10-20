import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('*')
export class CatchAllController {
  @Get('*')
  catchAll(@Res() response: Response) {
    console.log(__dirname);
    const indexHtml = readFileSync(
      join(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        '..',
        'client',
        'dist',
        'index.html',
      ),
      'utf-8',
    );

    console.log(indexHtml);

    response.send(indexHtml);
  }
}

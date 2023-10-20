import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('')
export class CatchAllController {
  @Get('/*')
  catchAll(@Res() response: Response) {
    try {
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
      console.log('assdadas');

      response.send(indexHtml);
    } catch (error) {
      console.error('Error reading index.html:', error);
      response.status(500).send('Internal Server Error');
    }
  }
}

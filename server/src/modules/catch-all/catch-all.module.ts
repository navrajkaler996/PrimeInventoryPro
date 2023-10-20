import { Module } from '@nestjs/common';
import { CatchAllService } from './catch-all.service';
import { CatchAllController } from './catch-all.controller';

@Module({
  controllers: [CatchAllController],
  providers: [CatchAllService],
})
export class CatchAllModule {}

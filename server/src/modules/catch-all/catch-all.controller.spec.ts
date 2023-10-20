import { Test, TestingModule } from '@nestjs/testing';
import { CatchAllController } from './catch-all.controller';
import { CatchAllService } from './catch-all.service';

describe('CatchAllController', () => {
  let controller: CatchAllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatchAllController],
      providers: [CatchAllService],
    }).compile();

    controller = module.get<CatchAllController>(CatchAllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

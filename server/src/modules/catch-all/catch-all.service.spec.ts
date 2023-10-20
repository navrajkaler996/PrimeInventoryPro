import { Test, TestingModule } from '@nestjs/testing';
import { CatchAllService } from './catch-all.service';

describe('CatchAllService', () => {
  let service: CatchAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatchAllService],
    }).compile();

    service = module.get<CatchAllService>(CatchAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

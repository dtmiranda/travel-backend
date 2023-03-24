import { Test, TestingModule } from '@nestjs/testing';
import { IslandsService } from './islands.service';

describe('IslandsService', () => {
  let service: IslandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IslandsService],
    }).compile();

    service = module.get<IslandsService>(IslandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

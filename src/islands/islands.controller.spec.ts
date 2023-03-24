import { Test, TestingModule } from '@nestjs/testing';
import { IslandsController } from './islands.controller';
import { IslandsService } from './islands.service';

describe('IslandsController', () => {
  let controller: IslandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IslandsController],
      providers: [IslandsService],
    }).compile();

    controller = module.get<IslandsController>(IslandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

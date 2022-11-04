import { Test, TestingModule } from '@nestjs/testing';
import { TrailsController } from './trails.controller';
import { TrailsService } from './trails.service';

describe('TrailsController', () => {
  let controller: TrailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrailsController],
      providers: [TrailsService],
    }).compile();

    controller = module.get<TrailsController>(TrailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PlatesController } from './plates.controller';
import { PlatesService } from './plates.service';

describe('PlatesController', () => {
  let controller: PlatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatesController],
      providers: [PlatesService],
    }).compile();

    controller = module.get<PlatesController>(PlatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

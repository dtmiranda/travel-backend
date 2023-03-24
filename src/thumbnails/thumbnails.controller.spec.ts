import { Test, TestingModule } from '@nestjs/testing';
import { ThumbnailsController } from './thumbnails.controller';
import { ThumbnailsService } from './thumbnails.service';

describe('ThumbnailsController', () => {
  let controller: ThumbnailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThumbnailsController],
      providers: [ThumbnailsService],
    }).compile();

    controller = module.get<ThumbnailsController>(ThumbnailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

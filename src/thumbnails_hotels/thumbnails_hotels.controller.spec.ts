import { Test, TestingModule } from '@nestjs/testing';
import { ThumbnailsHotelsController } from './thumbnails_hotels.controller';
import { ThumbnailsHotelsService } from './thumbnails_hotels.service';

describe('ThumbnailsHotelsController', () => {
  let controller: ThumbnailsHotelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThumbnailsHotelsController],
      providers: [ThumbnailsHotelsService],
    }).compile();

    controller = module.get<ThumbnailsHotelsController>(ThumbnailsHotelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

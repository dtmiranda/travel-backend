import { Test, TestingModule } from '@nestjs/testing';
import { ThumbnailsRestaurantsController } from './thumbnails_restaurants.controller';
import { ThumbnailsRestaurantsService } from './thumbnails_restaurants.service';

describe('ThumbnailsRestaurantsController', () => {
  let controller: ThumbnailsRestaurantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThumbnailsRestaurantsController],
      providers: [ThumbnailsRestaurantsService],
    }).compile();

    controller = module.get<ThumbnailsRestaurantsController>(ThumbnailsRestaurantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

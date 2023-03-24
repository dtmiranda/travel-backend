import { Test, TestingModule } from '@nestjs/testing';
import { ThumbnailsRestaurantsService } from './thumbnails_restaurants.service';

describe('ThumbnailsRestaurantsService', () => {
  let service: ThumbnailsRestaurantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThumbnailsRestaurantsService],
    }).compile();

    service = module.get<ThumbnailsRestaurantsService>(ThumbnailsRestaurantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

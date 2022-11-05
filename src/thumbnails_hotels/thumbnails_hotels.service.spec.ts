import { Test, TestingModule } from '@nestjs/testing';
import { ThumbnailsHotelsService } from './thumbnails_hotels.service';

describe('ThumbnailsHotelsService', () => {
  let service: ThumbnailsHotelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThumbnailsHotelsService],
    }).compile();

    service = module.get<ThumbnailsHotelsService>(ThumbnailsHotelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

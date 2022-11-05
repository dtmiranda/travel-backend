import { Test, TestingModule } from '@nestjs/testing';
import { PhotosPlatesService } from './photos_plates.service';

describe('PhotosPlatesService', () => {
  let service: PhotosPlatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotosPlatesService],
    }).compile();

    service = module.get<PhotosPlatesService>(PhotosPlatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

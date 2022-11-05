import { Test, TestingModule } from '@nestjs/testing';
import { PhotosRoomsService } from './photos_rooms.service';

describe('PhotosRoomsService', () => {
  let service: PhotosRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotosRoomsService],
    }).compile();

    service = module.get<PhotosRoomsService>(PhotosRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

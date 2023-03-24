import { Test, TestingModule } from '@nestjs/testing';
import { PhotosPlatesController } from './photos_plates.controller';
import { PhotosPlatesService } from './photos_plates.service';

describe('PhotosPlatesController', () => {
  let controller: PhotosPlatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotosPlatesController],
      providers: [PhotosPlatesService],
    }).compile();

    controller = module.get<PhotosPlatesController>(PhotosPlatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

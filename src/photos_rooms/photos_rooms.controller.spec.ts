import { Test, TestingModule } from '@nestjs/testing';
import { PhotosRoomsController } from './photos_rooms.controller';
import { PhotosRoomsService } from './photos_rooms.service';

describe('PhotosRoomsController', () => {
  let controller: PhotosRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotosRoomsController],
      providers: [PhotosRoomsService],
    }).compile();

    controller = module.get<PhotosRoomsController>(PhotosRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

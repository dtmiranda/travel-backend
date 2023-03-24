import { Module } from '@nestjs/common';
import { PhotosRoomsService } from './photos_rooms.service';
import { PhotosRoomsController } from './photos_rooms.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PhotosRoomsController],
  providers: [PhotosRoomsService, PrismaService]
})
export class PhotosRoomsModule {}

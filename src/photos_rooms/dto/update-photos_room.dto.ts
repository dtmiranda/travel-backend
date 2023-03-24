import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotosRoomDto } from './create-photos_room.dto';

export class UpdatePhotosRoomDto extends PartialType(CreatePhotosRoomDto) {}

import { Prisma } from "@prisma/client";

export class CreatePhotosRoomDto implements Prisma.PhotoRoomCreateInput{
  id?: string;
  room: Prisma.RoomCreateNestedOneWithoutPhotos_roomsInput;
  photo: Prisma.PhotoCreateNestedOneWithoutPhotos_roomsInput;
  create_at?: string | Date;
  update_at?: string | Date;
}

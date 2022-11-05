import { Prisma } from "@prisma/client";

export class PhotosRoom implements Prisma.PhotoRoomUncheckedCreateInput{
  id?: string;
  roomId: string;
  photoId: string;
  create_at?: string | Date;
  update_at?: string | Date;
}

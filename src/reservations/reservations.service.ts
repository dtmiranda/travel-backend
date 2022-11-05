import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {

  constructor(private readonly prisma: PrismaService){}

  create(createReservationDto: CreateReservationDto) {
    return this.prisma.reservation.create({
      data:{
        ...createReservationDto
      }
    });
  }

  findAll() {
    return this.prisma.reservation.findMany();
  }

  findOne(id: string) {
    return this.prisma.reservation.findUnique({
      where:{ id}
    });
  }

  update(id: string, updateReservationDto: UpdateReservationDto) {
    return this.prisma.reservation.update({
      where:{ id },
      data:{
        ...updateReservationDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.reservation.delete({
      where:{ id }
    });
  }
}

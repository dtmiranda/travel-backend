import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {

  constructor(private readonly prisma: PrismaService){}

  create(createTicketDto: CreateTicketDto) {
    return this.prisma.ticket.create({
      data:{
        ...createTicketDto
      }
    });
  }

  findAll() {
    return this.prisma.ticket.findMany();
  }

  findOne(id: string) {
    return this.prisma.ticket.findUnique({
      where: { id }
    });
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where:{ id },
      
      data:{

        ...updateTicketDto
      }
    });
  }
S
  remove(id: string) {
    return this.prisma.ticket.delete({
      where: { id }
    });
  }
}

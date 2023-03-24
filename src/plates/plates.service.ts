import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlateDto } from './dto/create-plate.dto';
import { UpdatePlateDto } from './dto/update-plate.dto';

@Injectable()
export class PlatesService {

  constructor(private readonly prisma: PrismaService){}

  create(createPlateDto: CreatePlateDto) {
    return this.prisma.plate.create({
      data:{
        ...createPlateDto
      }
    });
  }

  findAll() {
    return this.prisma.plate.findMany();
  }

  findOne(id: string) {
    return this.prisma.plate.findUnique({
      where:{ id }
    });
  }

  update(id: string, updatePlateDto: UpdatePlateDto) {
    return this.prisma.plate.update({
      where:{ id },
      data:{
        ...updatePlateDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.plate.delete({
      where: { id }
    });
  }
}

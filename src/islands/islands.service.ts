import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIslandDto } from './dto/create-island.dto';
import { UpdateIslandDto } from './dto/update-island.dto';

@Injectable()
export class IslandsService {

  constructor(private readonly prisma: PrismaService){}

  create(createIslandDto: CreateIslandDto) {
    return this.prisma.island.create({
      data: {
        ...createIslandDto
      }
    });
  }

  findAll() {
    return this.prisma.island.findMany();
  }

  findOne(id: string) {
    return this.prisma.island.findUnique({
      where:{ id }
    });
  }

  update(id: string, updateIslandDto: UpdateIslandDto) {
    return this.prisma.island.update({
      where:{ id },
      data:{

        ...updateIslandDto

      }
    });
  }

  remove(id: string) {
    return this.prisma.island.delete({
      where:{ id }
    });
  }
}

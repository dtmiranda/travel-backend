import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTrailDto } from './dto/create-trail.dto';
import { UpdateTrailDto } from './dto/update-trail.dto';

@Injectable()
export class TrailsService {

  constructor(private readonly prisma: PrismaService){}

  create(createTrailDto: CreateTrailDto) {
    return this.prisma.trail.create({
      data:{
        ...createTrailDto
      }
    });
  }

  findAll() {
    return this.prisma.trail.findMany();
  }

  findOne(id: string) {
    return this.prisma.trail.findUnique({

      where:{ id }

    });
  }

  update(id: string, updateTrailDto: UpdateTrailDto) {
    return this.prisma.trail.update({

      where:{ id },
      
      data:{

        ...updateTrailDto

      }
    });
  }

  remove(id: string) {
    return this.prisma.trail.delete({

      where: { id }
      
    });
  }
}

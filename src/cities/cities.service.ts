import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CitiesService {

  constructor (private readonly prisma: PrismaService){}

  create(createCityDto: CreateCityDto) {
    return this.prisma.city.create({
      data:{
        ...createCityDto
      }
    });
  }

  findAll() {
    return this.prisma.city.findMany();
  }
  

  findCityFromIsland(islandId: string){

    return this.prisma.city.findMany({
     where:{
      islandId : islandId
     }

    })
    
  }

  findOne(id: string) {
    return this.prisma.city.findUnique({
      where:{ id }
    });
  }

  update(id: string, updateCityDto: UpdateCityDto) {
    return this.prisma.city.update({
      where:{ id },
      data:{
        ...updateCityDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.city.delete({
      where:{ id }
    });
  }
}

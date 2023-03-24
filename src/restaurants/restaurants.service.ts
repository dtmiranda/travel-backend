import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {

  constructor ( private readonly prisma: PrismaService ){}

  create(createRestaurantDto: CreateRestaurantDto) {
    return this.prisma.restaurant.create({
      data: {
        ...createRestaurantDto
      }
    });
  }

  findAll() {
    return this.prisma.restaurant.findMany();
  }

  findOne(id: string) {
    return this.prisma.restaurant.findUnique({
      where:{ id }
    });
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return this.prisma.restaurant.update({
      where:{ id },
      data:{
        ...updateRestaurantDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.reservation.delete({
      where:{ id }
    });
  }
}

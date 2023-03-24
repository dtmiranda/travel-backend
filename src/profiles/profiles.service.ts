import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {

  constructor(private readonly prisma: PrismaService){}

  create(createProfileDto: CreateProfileDto) {
    return this.prisma.profile.create({

      data:{

        ...createProfileDto

      }
    });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: string) {
    return this.prisma.profile.findUnique({

      where:{ id }

    });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile.update({
      where:{ id },

      data:{
        ...updateProfileDto
      }
    });
  }

  remove(id: string) {
    return this.prisma.profile.delete({
      where:{ id }
    });
  }
}

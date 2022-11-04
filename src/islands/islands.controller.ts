import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IslandsService } from './islands.service';
import { CreateIslandDto } from './dto/create-island.dto';
import { UpdateIslandDto } from './dto/update-island.dto';

@Controller('islands')
export class IslandsController {
  constructor(private readonly islandsService: IslandsService) {}

  @Post()
  create(@Body() createIslandDto: CreateIslandDto) {
    return this.islandsService.create(createIslandDto);
  }

  @Get()
  findAll() {
    return this.islandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.islandsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIslandDto: UpdateIslandDto) {
    return this.islandsService.update(id, updateIslandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.islandsService.remove(id);
  }
}

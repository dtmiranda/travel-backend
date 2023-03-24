import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { CreatePlateDto } from './dto/create-plate.dto';
import { UpdatePlateDto } from './dto/update-plate.dto';

@Controller('plates')
export class PlatesController {
  constructor(private readonly platesService: PlatesService) {}

  @Post()
  create(@Body() createPlateDto: CreatePlateDto) {
    return this.platesService.create(createPlateDto);
  }

  @Get()
  findAll() {
    return this.platesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.platesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlateDto: UpdatePlateDto) {
    return this.platesService.update(id, updatePlateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.platesService.remove(id);
  }
}

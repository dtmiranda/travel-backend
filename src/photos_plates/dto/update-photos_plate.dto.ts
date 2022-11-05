import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotosPlateDto } from './create-photos_plate.dto';

export class UpdatePhotosPlateDto extends PartialType(CreatePhotosPlateDto) {}

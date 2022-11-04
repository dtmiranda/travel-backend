import { PartialType } from '@nestjs/mapped-types';
import { CreateIslandDto } from './create-island.dto';

export class UpdateIslandDto extends PartialType(CreateIslandDto) {}

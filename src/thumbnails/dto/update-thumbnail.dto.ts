import { PartialType } from '@nestjs/mapped-types';
import { CreateThumbnailDto } from './create-thumbnail.dto';

export class UpdateThumbnailDto extends PartialType(CreateThumbnailDto) {}

import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ICreateNote, IUpdateNote } from './types/dto';

@Controller('notes')
export class notesController {
  @Get()
  findAll(): string {
    return 'all items';
  }

  @Get(':id')
  findOne(@Param('') param): string {
    return `${param.id}`;
  }

  @Post()
  create(@Body() createNoteDto: ICreateNote): string {
    return `${JSON.stringify(createNoteDto)}`;
  }

  @Put(':id')
  update(@Body() updateNoteDto: IUpdateNote, @Param('id') id): string {
    return `${JSON.stringify(updateNoteDto)}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `delete ${id}`;
  }
}

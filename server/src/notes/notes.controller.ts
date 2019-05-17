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
import { NotesService } from './notes.service';
import { INote } from './types/interfaces';

@Controller('notes')
export class NotesController {
  constructor(private readonly service: NotesService) {}
  @Get()
  findAll(): Promise<INote[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('') param): Promise<INote> {
    return this.service.findOne(param.id);
  }

  @Post('search')
  search(@Body() searchFilters: Partial<INote> = {}): Promise<INote[]> {
    return this.service.findAll(searchFilters);
  }

  @Post()
  create(@Body() createDto: ICreateNote): Promise<INote> {
    return this.service.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateDto: IUpdateNote): Promise<INote> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<INote> {
    return this.service.delete(id);
  }
}

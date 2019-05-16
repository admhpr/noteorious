import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ICreateBoard, IUpdateBoard } from './types/dto';
import { IBoard } from './types/interfaces';
import { BoardsService } from './boards.service';
import { resolve } from 'url';
import { fixtures } from './test/boards.fixtures';

@Controller('boards')
export class BoardsController {
  constructor(private readonly service: BoardsService) {}

  @Get()
  findAll(): Promise<IBoard[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('') param): Promise<IBoard> {
    return this.service.findOne(param.id);
  }

  @Post('search')
  search(@Body() searchFilters: any): Promise<IBoard[]> {
    //TODO: point to service
    return new Promise(resolve => resolve(fixtures.boards));
  }

  @Post()
  create(@Body() createDto: ICreateBoard): IBoard {
    return this.service.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateDto: IUpdateBoard): Promise<IBoard> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<IBoard> {
    return this.service.delete(id);
  }
}

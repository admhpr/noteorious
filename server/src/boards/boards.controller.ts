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
import { InsertResult } from 'typeorm';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Get()
  findAll(): Promise<IBoard[]> {
    return this.boardService.findAll();
  }

  @Get(':id')
  findOne(@Param('') param): Promise<IBoard> {
    return this.boardService.findOne(param.id);
  }

  @Post()
  create(@Body() createBoardsDto: ICreateBoard): Promise<InsertResult> {
    return this.boardService.create(createBoardsDto);
  }

  @Put(':id')
  update(@Body() updateBoardsDto: IUpdateBoard, @Param('id') id): string {
    return `${JSON.stringify(updateBoardsDto)}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `delete ${id}`;
  }
}

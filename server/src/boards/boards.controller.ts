import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ICreateBoards, IUpdateBoards } from './types/dto';
import { IBoard } from './types/interfaces';
import { BoardsService } from './boards.service';

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
  create(@Body() createBoardsDto: ICreateBoards): string {
    return `${JSON.stringify(createBoardsDto)}`;
  }

  @Put(':id')
  update(@Body() updateBoardsDto: IUpdateBoards, @Param('id') id): string {
    return `${JSON.stringify(updateBoardsDto)}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `delete ${id}`;
  }
}

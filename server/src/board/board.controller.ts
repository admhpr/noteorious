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
import { BoardsService } from './board.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  findAll(): IBoard[] {
    return this.boardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('') param): IBoard {
    return this.boardsService.findOne(param.id);
  }

  @Post()
  create(@Body() createBoardDto: ICreateBoard): string {
    return `${JSON.stringify(createBoardDto)}`;
  }

  @Put(':id')
  update(@Body() updateBoardDto: IUpdateBoard, @Param('id') id): string {
    return `${JSON.stringify(updateBoardDto)}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `delete ${id}`;
  }
}

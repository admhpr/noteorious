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
import {
  InsertResult,
  DeleteResult,
  UpdateQueryBuilder,
  UpdateResult,
} from 'typeorm';
import { Board } from './board.entity';

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
  create(@Body() createBoardsDto: ICreateBoard): Board {
    return this.boardService.create(createBoardsDto);
  }

  @Put(':id')
  update(
    @Body() updateBoardsDto: IUpdateBoard,
    @Param('id') id,
  ): Promise<UpdateResult> {
    return this.boardService.update(id, updateBoardsDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<DeleteResult> {
    return this.boardService.update(id, { isActive: 0 });
  }
}

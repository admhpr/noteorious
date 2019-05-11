import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { ICreateBoard } from './types/interfaces';

@Controller('boards')
export class BoardsController {
  @Get()
  findAll(): string {
    return 'all items';
  }

  @Get(':id')
  findOne(@Param('') param): string {
    return `${param.id}`;
  }

  @Post()
  create(@Body() createBoardDto: ICreateBoard): string {
    return `${JSON.stringify(createBoardDto)}`;
  }
}

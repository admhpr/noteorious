import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateBoard } from './types/interfaces';

@Controller('boards')
export class BoardsController {
  @Get()
  findAll(): string {
    return 'all items';
  }
  @Post()
  create(@Body() createBoardDto: ICreateBoard): string {
    return `${JSON.stringify(createBoardDto)}`;
  }
}

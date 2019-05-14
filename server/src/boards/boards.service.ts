import { Injectable } from '@nestjs/common';
import { IBoard } from './types/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { ICreateBoard, IUpdateBoard } from './types/dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepo: Repository<Board>,
  ) {}

  findAll(): Promise<IBoard[]> {
    return this.boardRepo.find();
  }

  findOne(id: string): Promise<IBoard> {
    return this.boardRepo.findOne(id);
  }

  create(dto: ICreateBoard) {
    return this.boardRepo.create(dto);
  }

  update(id: string, dto: IUpdateBoard) {
    return this.boardRepo.update(id, dto);
  }

  delete(id: string) {
    return this.boardRepo.delete(id);
  }
}

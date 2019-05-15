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

  create(dto: ICreateBoard): IBoard {
    return this.boardRepo.create(dto);
  }

  async update(id: string, dto: IUpdateBoard) {
    const toUpdate = await this.findOne(id);
    return this.boardRepo.save({ ...toUpdate, ...dto });
  }

  delete(id: string) {
    return this.update(id, { isActive: 0 });
  }
}

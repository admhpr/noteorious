import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Repository } from 'typeorm';
import { INote } from './types/interfaces';
import { ICreateNote, IUpdateNote } from './types/dto';
import { Board } from '../boards/board.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepo: Repository<Note>,
  ) {}

  findAll(filters = {}): Promise<INote[]> {
    return this.noteRepo.find({ ...filters, relations: ['board'] });
  }

  findOne(id: string): Promise<INote> {
    return this.noteRepo.findOne(id);
  }

  async create(dto: ICreateNote): Promise<INote> {
    const note = new Note();
    const relation = new Board();
    relation.id = dto.boardId;
    note.board = relation;
    return this.noteRepo.save({ ...note, ...dto });
  }

  async update(id: string, dto: IUpdateNote): Promise<INote> {
    const toUpdate = await this.findOne(id);
    return this.noteRepo.save({ ...toUpdate, ...dto });
  }

  delete(id: string): Promise<INote> {
    return this.update(id, { isActive: 0 });
  }
}

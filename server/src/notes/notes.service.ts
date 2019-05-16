import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Repository } from 'typeorm';
import { INote } from './types/interfaces';
import { ICreateNote, IUpdateNote } from './types/dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepo: Repository<Note>,
  ) {}

  findAll(): Promise<INote[]> {
    return this.noteRepo.find({
      join: {
        alias: 'note',
        leftJoinAndSelect: {
          boards: 'note.boardId',
        },
      },
    });
  }

  findOne(id: string): Promise<INote> {
    return this.noteRepo.findOne(id);
  }

  create(dto: ICreateNote): INote {
    return this.noteRepo.create(dto);
  }

  async update(id: string, dto: IUpdateNote): Promise<INote> {
    const toUpdate = await this.findOne(id);
    return this.noteRepo.save({ ...toUpdate, ...dto });
  }

  delete(id: string): Promise<INote> {
    return this.update(id, { isActive: 0 });
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from '../notes.controller';
import { NotesService } from '../notes.service';
import { Note } from '../note.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { fixtures } from './notes.fixtures';

describe('Note Controller', () => {
  let controller: NotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [
        NotesService,
        {
          provide: getRepositoryToken(Note),
          useValue: fixtures.mockRepository,
        },
      ],
    }).compile();

    controller = module.get<NotesController>(NotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

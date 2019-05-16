import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from '../notes.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Note } from '../note.entity';
import { fixtures } from './notes.fixtures';
import { MockType } from 'src/common/types/essentials';
import { Repository } from 'typeorm';

describe('NotesService', () => {
  let service: NotesService;
  let repositoryMock: MockType<Repository<Note>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesService,
        {
          provide: getRepositoryToken(Note),
          useFactory: fixtures.repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<NotesService>(NotesService);
    repositoryMock = module.get(getRepositoryToken(Note));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of note entities', () => {
      const notes = fixtures.notes;
      repositoryMock.find.mockReturnValue(notes);
      expect(service.findAll()).toEqual(notes);
    });
  });
  describe('findOne', () => {
    it('should return a single note entity', () => {
      const note = fixtures.note;
      repositoryMock.findOne.mockReturnValue(note);
      expect(service.findOne(note.id)).toEqual(note);
    });
    it('should have been called with the correct params', () => {
      const note = fixtures.note;
      service.findOne(note.id);
      expect(repositoryMock.findOne).toHaveBeenCalledWith(note.id);
    });
  });
  describe('create', () => {
    it('should return the created note entity', async () => {
      const note = fixtures.note;
      repositoryMock.create.mockReturnValue(note);
      expect(await service.create(note)).toEqual(note);
    });
    it('should have been called with the correct dto', () => {
      const dto = fixtures.note;
      service.create(dto);
      expect(repositoryMock.create).toHaveBeenCalledWith(dto);
    });
  });
  describe('update', () => {
    const note = fixtures.note;
    const params = { id: '1' };

    it('should return the updated note entity', async () => {
      repositoryMock.save.mockReturnValue(note);
      expect(await service.update(params.id, note)).toEqual(note);
    });
    it('should have been called with new values', async () => {
      service.update(params.id, note);
      expect(repositoryMock.findOne).toHaveBeenCalled();
      expect(await repositoryMock.save).toHaveBeenCalledWith({
        ...{ '0': '1' },
        ...note,
      });
    });
  });
  describe('delete', () => {
    const note = fixtures.note;
    const params = { id: '1' };

    it('should return the deleted note entity', async () => {
      repositoryMock.save.mockReturnValue(note);
      expect(await service.delete(params.id)).toEqual(note);
    });
    it('should have been called with id and isActive 0', async () => {
      service.delete(params.id);
      expect(repositoryMock.findOne).toHaveBeenCalled();
      expect(await repositoryMock.save).toHaveBeenCalledWith({
        ...{ '0': '1' },
        ...{ isActive: 0 },
      });
    });
  });
});

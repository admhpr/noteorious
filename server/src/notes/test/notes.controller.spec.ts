import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from '../notes.controller';
import { NotesService } from '../notes.service';
import { Note } from '../note.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { fixtures } from './notes.fixtures';

describe('Notes Controller', () => {
  let controller: NotesController;
  let service: NotesService;

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

    service = module.get<NotesService>(NotesService);
    controller = module.get<NotesController>(NotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of notes', async () => {
      const result = fixtures.notes;

      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => new Promise(resolve => resolve(result)));

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single note', async () => {
      const result = fixtures.note;

      jest
        .spyOn(service, 'findOne')
        .mockImplementation(() => new Promise(resolve => resolve(result)));

      expect(await controller.findOne(1)).toBe(result);
    });
  });

  describe('create', () => {
    it('should return a created note', async () => {
      const result = fixtures.note;

      jest.spyOn(service, 'create').mockImplementation(() => result);

      expect(await controller.create(fixtures.note)).toBe(result);
    });
  });
  describe('update', () => {
    it('should return a updated note', async () => {
      const result = fixtures.note;

      jest
        .spyOn(service, 'update')
        .mockImplementation(() => new Promise(resolve => resolve(result)));

      expect(await controller.update(1, fixtures.note)).toBe(result);
    });
  });
  describe('delete', () => {
    it('should return the deleted note', async () => {
      const result = fixtures.note;

      jest
        .spyOn(service, 'delete')
        .mockImplementation(() => new Promise(resolve => resolve(result)));

      expect(await controller.delete(1)).toBe(result);
    });
  });
});

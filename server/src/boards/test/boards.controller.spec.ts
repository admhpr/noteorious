import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from '../boards.controller';
import { BoardsService } from '../boards.service';
import { fixtures } from './boards.fixtures';
import { Board } from '../board.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe(' Boards Controller', () => {
  let controller: BoardsController;
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardsController],
      providers: [
        BoardsService,
        {
          provide: getRepositoryToken(Board),
          useValue: fixtures.mockRepository,
        },
      ],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
    controller = module.get<BoardsController>(BoardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of boards', async () => {
      const result = fixtures.boards;

      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => new Promise(resolve => resolve(result)));

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single board', async () => {
      const result = fixtures.board;

      jest
        .spyOn(service, 'findOne')
        .mockImplementation(() => new Promise(resolve => resolve(result)));

      expect(await controller.findOne(1)).toBe(result);
    });
  });

  describe('create', () => {
    it('should return a single board', async () => {
      const result = fixtures.board;

      jest.spyOn(service, 'create').mockImplementation(() => result);

      expect(await controller.create(fixtures.board)).toBe(result);
    });
  });
});

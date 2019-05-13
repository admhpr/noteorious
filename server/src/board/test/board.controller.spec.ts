import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from '../board.controller';
import { BoardService } from '../board.service';
import { IBoard } from '../types/interfaces';
import { fixtures } from './fixtures';

describe(' Board Controller', () => {
  let controller: BoardController;
  let service: BoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [BoardService],
    }).compile();

    service = module.get<BoardService>(BoardService);
    controller = module.get<BoardController>(BoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of boards', async () => {
      const result: IBoard[] = [
        {
          id: 1,
          title: 'Board One',
          description: 'This is board one',
        },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });
  describe('findAll', () => {
    it('should return an array of boards', async () => {
      const result = fixtures.boards;

      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      const spy = jest.spyOn(controller, 'findAll');
      expect(await controller.findAll()).toBe(result);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single board', async () => {
      const result = fixtures.board;

      jest.spyOn(service, 'findOne').mockImplementation(() => result);

      const spy = jest.spyOn(controller, 'findOne');
      expect(await controller.findOne(1)).toBe(result);
      expect(spy).toHaveBeenCalled();
    });
  });
});

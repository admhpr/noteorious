import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from '../board.controller';
import { BoardsService } from '../board.service';
import { IBoard } from '../types/interfaces';
import { fixtures } from './fixtures';

describe(' Boards Controller', () => {
  let controller: BoardsController;
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardsController],
      providers: [BoardsService],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
    controller = module.get<BoardsController>(BoardsController);
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

import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from '../boards.controller';
import { BoardsService } from '../boards.service';
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
});

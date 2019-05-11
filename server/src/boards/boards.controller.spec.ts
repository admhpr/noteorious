import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from './boards.controller';

describe('Boards Controller', () => {
  let controller: BoardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardsController],
    }).compile();

    controller = module.get<BoardsController>(BoardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of board objects', () => {
      expect(controller.findAll()).toBe('all items');
    });
  });
});

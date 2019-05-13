import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from '../boards.controller';
import { BoardsService } from '../boards.service';

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
});

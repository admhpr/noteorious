import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from '../boards.service';
import { fixtures } from './fixtures';
import { Board } from '../board.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardsService,
        {
          provide: getRepositoryToken(Board),
          useValue: fixtures.mockRepository,
        },
      ],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

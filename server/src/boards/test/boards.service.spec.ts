import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from '../boards.service';
import { fixtures } from './boards.fixtures';
import { Board } from '../board.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType } from '../../common/types/essentials';
import { Repository } from 'typeorm';

describe('BoardsService', () => {
  let service: BoardsService;
  let repositoryMock: MockType<Repository<Board>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardsService,
        {
          provide: getRepositoryToken(Board),
          useFactory: fixtures.repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
    repositoryMock = module.get(getRepositoryToken(Board));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of board entities', () => {
      const boards = fixtures.boards;
      repositoryMock.find.mockReturnValue(boards);
      expect(service.findAll()).toEqual(boards);
    });
  });
  describe('findOne', () => {
    it('should return an array of board entities', () => {
      const board = fixtures.board;
      repositoryMock.findOne.mockReturnValue(board);
      expect(service.findOne(board.id)).toEqual(board);
    });
    it('should have been called with the correct params', () => {
      const board = fixtures.board;
      service.findOne(board.id);
      expect(repositoryMock.findOne).toHaveBeenCalledWith(board.id);
    });
  });
});

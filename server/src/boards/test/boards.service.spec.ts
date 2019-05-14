import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from '../boards.service';

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(async () => {
    service = new BoardsService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

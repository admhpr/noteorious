import { repositoryMockFactory } from '../../common/fixtures';

const board = {
  id: '1',
  title: 'Board One',
  description: 'This is board one',
  isActive: 1,
  createdAt: new Date('2019-05-15T02:41:39.111Z'),
  updatedAt: new Date('2019-05-15T02:41:39.111Z'),
};

const boards = [board];

const mockRepository = {
  data: boards,
};

export const fixtures = Object.freeze({
  board,
  boards,
  mockRepository,
  repositoryMockFactory,
});

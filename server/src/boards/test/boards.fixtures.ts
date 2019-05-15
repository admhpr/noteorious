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

// @ts-ignore
const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  find: jest.fn(entity => entity),
  findOne: jest.fn(entity => entity),
  create: jest.fn(entity => entity),
  update: jest.fn(entity => entity),
  delete: jest.fn(entity => entity),
}));

export const fixtures = Object.freeze({
  board,
  boards,
  mockRepository,
  repositoryMockFactory,
});

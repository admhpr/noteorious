const board = {
  id: '1',
  title: 'Board One',
  description: 'This is board one',
};

const boards = [board];

const mockRepository = {
  data: boards,
};
export const fixtures = Object.freeze({
  board,
  boards,
  mockRepository,
});

import { MockType } from './types/essentials';
import { Repository } from 'typeorm';

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    find: jest.fn(entity => entity),
    findOne: jest.fn(entity => entity),
    create: jest.fn(entity => entity),
    save: jest.fn(entity => entity),
    delete: jest.fn(entity => entity),
  }),
);

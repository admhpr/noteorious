import { MockType } from './types/essentials';
import { Repository } from 'typeorm';

const testRunning = typeof jest !== 'undefined';
// @ts-ignore
export const repositoryMockFactory: () => MockType<
  Repository<any>
> = testRunning
  ? jest.fn(() => ({
      find: jest.fn(entity => entity),
      findOne: jest.fn(entity => entity),
      create: jest.fn(entity => entity),
      save: jest.fn(entity => entity),
      delete: jest.fn(entity => entity),
    }))
  : null;

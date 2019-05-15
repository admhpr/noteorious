export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type MockType<T> = { [P in keyof T]: jest.Mock<{}> };

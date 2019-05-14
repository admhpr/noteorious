export type ICreateBoard = {
  title: string;
  description: string;
};

export type IUpdateBoard = {
  isActive?: number;
} & Partial<ICreateBoard>;

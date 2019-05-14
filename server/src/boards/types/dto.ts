export type ICreateBoard = {
  title: string;
  description: string;
};

export type IUpdateBoard = {
  readonly board_id: number;
} & Partial<ICreateBoard>;

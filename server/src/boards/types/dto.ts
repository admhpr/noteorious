export type ICreateBoards = {
  title: string;
  description: string;
};

export type IUpdateBoards = {
  readonly board_id: number;
} & Partial<ICreateBoards>;

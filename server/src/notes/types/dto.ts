export type ICreateNote = {
  title: string;
  description: string;
  boardId: number;
};

export type IUpdateNote = {
  isActive?: number;
} & Partial<ICreateNote>;

export type ICreateNote = {
  title: string;
  description: string;
  boardId: string;
};

export type IUpdateNote = {
  isActive?: number;
} & Partial<ICreateNote>;

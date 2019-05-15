export type ICreateNote = {
  title: string;
  description: string;
};

export type IUpdateNote = {
  isActive?: number;
} & Partial<ICreateNote>;

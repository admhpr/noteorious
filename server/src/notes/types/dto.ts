export type ICreateNote = {
  title: string;
  description: string;
};

export type IUpdateNote = {
  readonly note_id: number;
  readonly board_id: number;
} & Partial<ICreateNote>;

export type UserFile = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  email: string | null;
  username: string;
  files: UserFile[];
};

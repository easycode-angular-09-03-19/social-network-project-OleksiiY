export interface Users {
  avatar: string;
  city: string;
  cover: string;
  full_name: string;
  _id: string;
}

export interface Followers {
  counts: number;
  users: Array<Users>;
}

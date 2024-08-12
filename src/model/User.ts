export type isPrivateType = 'false' | 'true';
export type roleType = 'admin' | 'user';

export interface User {
  id: string;
  nickname: string;
  image: string;
  isPrivate: isPrivateType;
  role: roleType;
}

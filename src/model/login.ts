export interface LoginEntity {
  username: string;
  password: string;
}

export const createEmptyLogin = () : LoginEntity => ({
  username: '',
  password: '',
});

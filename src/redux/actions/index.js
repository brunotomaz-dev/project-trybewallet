// Coloque aqui suas actions
export const SET_USER = 'user email';

export const SET_WALLET = 'wallet data';

export const userAction = (email) => ({
  type: SET_USER,
  email,
});

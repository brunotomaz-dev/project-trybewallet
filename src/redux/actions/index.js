// Coloque aqui suas actions
export const SET_USER = 'user email';

export const SET_WALLET = 'wallet data';

export const GET_CURRENCIES = 'currencies';

export const userAction = (email) => ({
  type: SET_USER,
  email,
});

export const getCurrency = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export function fetchCurrency() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => Object.keys(currencies)
      .filter((coin) => coin !== 'USDT').map((coin) => coin))
    .then((coins) => dispatch(getCurrency(coins)));
}

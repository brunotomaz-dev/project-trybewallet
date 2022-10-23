// Coloque aqui suas actions
export const SET_USER = 'set user email';

export const SET_EXPENSES = 'set expenses data';

export const GET_CURRENCIES = 'get currencies';

export const REMOVE_EXPENSES = 'remove expenses';

export const EDITOR_EXPENSES = 'change editor status';

export const UPDATE_EXPENSES = 'update expenses';

export const userAction = (email) => ({
  type: SET_USER,
  email,
});

export const getCurrency = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const getExpenses = (expenses) => ({
  type: SET_EXPENSES,
  expenses,
});

export const removeExpenses = (expenses) => ({
  type: REMOVE_EXPENSES,
  expenses,
});

export const editorExpenses = (editStatus) => ({
  type: EDITOR_EXPENSES,
  editStatus,
});

export const updateExpenses = (expenses) => ({
  type: UPDATE_EXPENSES,
  expenses,
});

export function fetchCurrency() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => Object.keys(currencies)
      .filter((coin) => coin !== 'USDT').map((coin) => coin))
    .then((coins) => dispatch(getCurrency(coins)));
}

export function fetchExchangeRates(state) {
  const { expense: value, currency, method, tag, description } = state;
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((exchangeRates) => ({
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    }))
    .then((rates) => dispatch(getExpenses(rates)));
}

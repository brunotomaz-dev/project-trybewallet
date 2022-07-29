import { GET_CURRENCIES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // strings
  expenses: [], // objetos com id, value, currency, method, tag, description exchangeRates
  editor: false, // indica se despesa está sendo editada
  idToEdit: 0, // id da despesa que é editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;

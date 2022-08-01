import { GET_CURRENCIES, SET_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // strings
  expenses: [], // objetos com id, value, currency, method, tag, description exchangeRates
  editor: false, // indica se despesa está sendo editada
  idToEdit: 0, // id da despesa que é editada
};

const wallet = (state = INITIAL_STATE, action) => {
  const setId = () => (state.expenses.length > 0 ? state.expenses.length : 0);
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: setId(), ...action.expenses }],
    };
  default:
    return state;
  }
};

export default wallet;

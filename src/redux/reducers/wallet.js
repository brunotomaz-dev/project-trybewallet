import {
  EDITOR_EXPENSES,
  GET_CURRENCIES,
  REMOVE_EXPENSES,
  SET_EXPENSES,
  UPDATE_EXPENSES,
} from '../actions';

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
  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses
          .filter((item) => action.expenses.id !== item.id), action.expenses,
      ],
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
    };
  case EDITOR_EXPENSES:
    return {
      ...state,
      ...action.editStatus,
    };
  default:
    return state;
  }
};

export default wallet;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  editorExpenses, fetchCurrency, fetchExchangeRates, updateExpenses,
} from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      expense: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { fetchExchange } = this.props;
    fetchExchange(this.state);
    this.setState({
      expense: '',
      description: '',
    });
  }

  handleEditClick = () => {
    const {
      editorStatus, updateDispatch, wallet: { expenses: walletExpenses, idToEdit },
    } = this.props;
    const { expense: value, description, currency, method, tag } = this.state;
    const filterById = walletExpenses.filter((item) => idToEdit === item.id);
    const updatedExpense = {
      ...filterById[0], value, description, currency, method, tag,
    };

    updateDispatch(updatedExpense);
    editorStatus({
      idToEdit: 0,
      editor: false,
    });
    this.setState({
      expense: '',
      description: '',
    });
  }

  mountSelect = () => {
    const { wallet: { currencies } } = this.props;
    return currencies
      .map((currency) => (
        <option
          className="wallet-option"
          key={ currency }
          value={ currency }
        >
          {currency}
        </option>));
  }

  buttonAdd = () => (
    <button
      className="wallet-button"
      type="button"
      onClick={ this.handleClick }
    >
      Adicionar Despesa
    </button>
  )

  buttonEdit = () => (
    <button
      className="wallet-button"
      type="button"
      onClick={ this.handleEditClick }
    >
      Editar despesa
    </button>
  )

  render() {
    const { expense, description, currency } = this.state;
    const { wallet: { editor } } = this.props;
    return (
      <div className="wallet-form">
        <label htmlFor="expense">
          Valor:
          {' '}
          <input
            className="wallet"
            data-testid="value-input"
            type="number"
            name="expense"
            id="expense"
            value={ expense }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          {' '}
          <input
            className="wallet"
            data-testid="description-input"
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          {' '}
          <select
            className="wallet"
            data-testid="currency-input"
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {this.mountSelect()}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          {' '}
          <select
            className="wallet"
            data-testid="method-input"
            name="method"
            id="method"
            onChange={ this.handleChange }
          >
            <option
              className="wallet-option"
              value="Dinheiro"
            >
              Dinheiro
            </option>
            <option
              className="wallet-option"
              value="Cartão de crédito"
            >
              Cartão de crédito
            </option>
            <option
              className="wallet-option"
              value="Cartão de débito"
            >
              Cartão de débito
            </option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          {' '}
          <select
            className="wallet"
            data-testid="tag-input"
            name="tag"
            id="tag"
            onChange={ this.handleChange }

          >
            <option className="wallet-option" value="Alimentação">Alimentação</option>
            <option className="wallet-option" value="Lazer">Lazer</option>
            <option className="wallet-option" value="Trabalho">Trabalho</option>
            <option className="wallet-option" value="Transporte">Transporte</option>
            <option className="wallet-option" value="Saúde">Saúde</option>
          </select>
        </label>
        { editor ? this.buttonEdit() : this.buttonAdd() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => { dispatch(fetchCurrency()); },
  fetchExchange: (state) => { dispatch(fetchExchangeRates(state)); },
  updateDispatch: (state) => { dispatch(updateExpenses(state)); },
  editorStatus: (newStatus) => { dispatch(editorExpenses(newStatus)); },
});

WalletForm.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  fetchExchange: PropTypes.func.isRequired,
  updateDispatch: PropTypes.func.isRequired,
  wallet: PropTypes.objectOf(Array).isRequired,
  editorStatus: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

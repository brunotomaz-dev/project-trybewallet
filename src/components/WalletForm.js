import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      expense: 0,
      description: '',
      currency: '',
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

  mountSelect = () => {
    const { currencies } = this.props;
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

  render() {
    const { expense, description, currency } = this.state;
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => { dispatch(fetchCurrency()); },
});

WalletForm.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

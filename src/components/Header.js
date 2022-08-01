import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../images/trybe_logo.png';
import store from '../redux/store';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  handleTotal = () => {
    const currentStore = store.getState();
    const { wallet: { expenses } } = currentStore;
    let soma = 0;
    expenses.map((item) => {
      const { exchangeRates, value, currency } = item;
      const exchangeCurrency = Object.entries(exchangeRates)
        .filter((rate) => rate.includes(currency));
      const currentExchange = value * exchangeCurrency[0][1].ask;
      soma += currentExchange;
      return soma;
    });
    this.setState({
      total: soma.toFixed(2),
    });
  }

  unsubscribe = () => {
    store.subscribe(this.handleTotal);
  }

  render() {
    this.unsubscribe();
    const { userMail } = this.props;
    const { total } = this.state;
    return (
      <div className="header">
        <div>
          <img src={ logo } alt="Trybe Logo" />
        </div>
        <div data-testid="email-field">
          Email:
          {' '}
          {userMail}
        </div>
        <div>
          R$
          <div data-testid="total-field">
            { total }
          </div>
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userMail: state.user.email,
});

Header.propTypes = {
  userMail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

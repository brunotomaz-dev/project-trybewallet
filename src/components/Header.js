import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../images/trybe_logo.png';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  render() {
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
        <div data-testid="total-field">
          R$
          {' '}
          { total }
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

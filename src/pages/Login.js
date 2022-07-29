import React from 'react';
import '../styles/login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../images/trybe_logo.png';
import { userAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isValidMail: false,
      email: '',
      password: '',
      isDisabled: true,
      buttonClass: 'disabled',
    };
  }

  validateMail = (email) => {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    const validate = /\S+@\S+\.\S+/;
    const isValid = validate.test(email);
    const changeState = (bool) => this.setState({ isValidMail: bool });
    return isValid ? changeState(true) : changeState(false);
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.validateChar());
  }

  validateChar = () => {
    const { email, password, isValidMail } = this.state;
    const minChar = 5;
    let isValid = false;
    this.validateMail(email);
    if (password.length > minChar && isValidMail) {
      isValid = true;
    }

    const changeState = (bool, text) => this.setState({
      isDisabled: bool,
      buttonClass: text,
    });
    return !isValid
      ? changeState(true, 'disabled')
      : changeState(false, 'loginButton');
  }

  handleClick = () => {
    const { emailDispatch, history } = this.props;
    const { email } = this.state;
    emailDispatch(email);
    this.setState({ email: '', password: '' });
    console.log(history);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled, buttonClass } = this.state;
    return (
      <section className="login">
        <img src={ logo } alt="trybe" className="loginLogo" />
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />

        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          className={ buttonClass }
          disabled={ isDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  { emailDispatch: (data) => { dispatch(userAction(data)); } }
);

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(String).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

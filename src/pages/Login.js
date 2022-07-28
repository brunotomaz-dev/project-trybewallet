import React from 'react';
import '../styles/login.css';
import logo from '../images/trybe_logo.png';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isValidMail: true,
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
    const changeState = (bool, text) => this.setState({
      isDisabled: bool,
      buttonClass: text,
    });
    const minChar = 3;
    const { email, password } = this.state;
    return (password.length && email.length) <= minChar
      ? changeState(true, 'disabled')
      : changeState(false, 'loginButton');
  }

  handleClick = () => {
    const { email } = this.state;
    const { isValidMail } = this.state;
    this.validateMail(email);
    if (isValidMail) {
      // send to store
    }
  }

  render() {
    const { email, isValidMail, password, isDisabled, buttonClass } = this.state;
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
        {!isValidMail ? <span className="invalidMail">invalid Email</span> : <div />}
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

export default Login;

import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import '../styles/wallet.css';

class Wallet extends React.Component {
  // componentDidMount() {
  //   document.body.style.backgroundColor = 'white';
  // }

  render() {
    return (
      <>
        <Header />
        <h2>Tabela de Despesas</h2>
        <WalletForm />
      </>
    );
  }
}

export default Wallet;

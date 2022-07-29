import React from 'react';
import Header from '../components/Header';
import '../styles/wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'white';
  }

  render() {
    return (
      <div>
        <Header />
        TrybeWallet
      </div>
    );
  }
}

export default Wallet;

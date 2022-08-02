import React from 'react';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';
import userEvent from '@testing-library/user-event';
// import { cleanup } from '@testing-library/react/dist/pure';
import { screen, cleanup } from '@testing-library/react';
import WalletForm from '../../components/WalletForm';
import Header from '../../components/Header';

describe('Testa a página de Login', () => {
  beforeEach(cleanup)
  test('Botões da página de Login', async () => {
    const {history} = renderWithRouterAndRedux(<App />);
   
    const button = screen.getByRole('button', {name: 'Entrar'});
    const inputEmail = screen.getByPlaceholderText('Email')
    const inputSenha = screen.getByPlaceholderText('Senha')
   
    await userEvent.type(inputEmail, 'tomaz@gmail.com')
    await userEvent.type(inputSenha, '1234567')
    userEvent.click(button)
    
   
    const {pathname} = history.location
    expect(pathname).toBe('/carteira')    
  })
  test('walletForm', () => {
    renderWithRouterAndRedux(<WalletForm />)

    const button = screen.getByRole('button', {name: 'Adicionar Despesa'})
    const valueText = screen.getByLabelText('Valor:')
    const descriptionText = screen.getByLabelText('Descrição:')
    const moeda = screen.getByText('Moeda:')
    const pay = screen.getByText('Método de Pagamento:')
    
    userEvent.type(valueText, '1')
    userEvent.type(descriptionText, 'Pizza')
    userEvent.selectOptions(moeda, 'CAD')
    userEvent.click(button)
  })
  test('Tese do Header',() => {
    const initialState = {
      user: {
        email: 'tomaz@gmail.com'
      },
      wallet: {
        currencies: [
          'USD',
          'CAD',
          'GBP',
          'ARS',
          'BTC',
          'LTC',
          'EUR',
          'JPY',
          'CHF',
          'AUD',
          'CNY',
          'ILS',
          'ETH',
          'XRP',
          'DOGE'
        ],
        expenses: [
          {
            id: 0,
            value: '1',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'Alimentação',
            description: 'Pizza',
            exchangeRates: {
              USD: {
                code: 'USD',
                codein: 'BRL',
                name: 'Dólar Americano/Real Brasileiro',
                high: '5.2804',
                low: '5.1856',
                varBid: '0.0956',
                pctChange: '1.84',
                bid: '5.2781',
                ask: '5.2806',
                timestamp: '1659471520',
                create_date: '2022-08-02 17:18:40'
              },
              USDT: {
                code: 'USD',
                codein: 'BRLT',
                name: 'Dólar Americano/Real Brasileiro Turismo',
                high: '5.3',
                low: '5.19',
                varBid: '0.085',
                pctChange: '1.63',
                bid: '5.14',
                ask: '5.45',
                timestamp: '1659468780',
                create_date: '2022-08-02 16:33:00'
              },
              CAD: {
                code: 'CAD',
                codein: 'BRL',
                name: 'Dólar Canadense/Real Brasileiro',
                high: '4.1084',
                low: '4.0271',
                varBid: '0.0648',
                pctChange: '1.61',
                bid: '4.0985',
                ask: '4.1018',
                timestamp: '1659471520',
                create_date: '2022-08-02 17:18:40'
              },
              GBP: {
                code: 'GBP',
                codein: 'BRL',
                name: 'Libra Esterlina/Real Brasileiro',
                high: '6.4292',
                low: '6.3192',
                varBid: '0.0735',
                pctChange: '1.16',
                bid: '6.4192',
                ask: '6.426',
                timestamp: '1659471520',
                create_date: '2022-08-02 17:18:40'
              },
              ARS: {
                code: 'ARS',
                codein: 'BRL',
                name: 'Peso Argentino/Real Brasileiro',
                high: '0.0399',
                low: '0.0393',
                varBid: '0.0006',
                pctChange: '1.53',
                bid: '0.0399',
                ask: '0.0399',
                timestamp: '1659471520',
                create_date: '2022-08-02 17:18:40'
              },
              BTC: {
                code: 'BTC',
                codein: 'BRL',
                name: 'Bitcoin/Real Brasileiro',
                high: '123',
                low: '118.373',
                varBid: '8265',
                pctChange: '7.28',
                bid: '121.765',
                ask: '121.765',
                timestamp: '1659470708',
                create_date: '2022-08-02 17:05:08'
              },
              LTC: {
                code: 'LTC',
                codein: 'BRL',
                name: 'Litecoin/Real Brasileiro',
                high: '444.44',
                low: '286.7',
                varBid: '-20.84',
                pctChange: '-6.32',
                bid: '308.53',
                ask: '309.15',
                timestamp: '1659470761',
                create_date: '2022-08-02 17:06:01'
              },
              EUR: {
                code: 'EUR',
                codein: 'BRL',
                name: 'Euro/Real Brasileiro',
                high: '5.3748',
                low: '5.2971',
                varBid: '0.0484',
                pctChange: '0.91',
                bid: '5.3652',
                ask: '5.3698',
                timestamp: '1659471522',
                create_date: '2022-08-02 17:18:42'
              },
              JPY: {
                code: 'JPY',
                codein: 'BRL',
                name: 'Iene Japonês/Real Brasileiro',
                high: '0.03993',
                low: '0.03936',
                varBid: '0.0002',
                pctChange: '0.51',
                bid: '0.03964',
                ask: '0.03966',
                timestamp: '1659471523',
                create_date: '2022-08-02 17:18:43'
              },
              CHF: {
                code: 'CHF',
                codein: 'BRL',
                name: 'Franco Suíço/Real Brasileiro',
                high: '5.5188',
                low: '5.4391',
                varBid: '0.0554',
                pctChange: '1.01',
                bid: '5.5118',
                ask: '5.5167',
                timestamp: '1659471520',
                create_date: '2022-08-02 17:18:40'
              },
              AUD: {
                code: 'AUD',
                codein: 'BRL',
                name: 'Dólar Australiano/Real Brasileiro',
                high: '3.659',
                low: '3.5863',
                varBid: '0.0138',
                pctChange: '0.38',
                bid: '3.653',
                ask: '3.6558',
                timestamp: '1659471520',
                create_date: '2022-08-02 17:18:40'
              },
              CNY: {
                code: 'CNY',
                codein: 'BRL',
                name: 'Yuan Chinês/Real Brasileiro',
                high: '0.7819',
                low: '0.7646',
                varBid: '0.0161',
                pctChange: '2.11',
                bid: '0.7817',
                ask: '0.782',
                timestamp: '1659471482',
                create_date: '2022-08-02 17:18:02'
              },
              ILS: {
                code: 'ILS',
                codein: 'BRL',
                name: 'Novo Shekel Israelense/Real Brasileiro',
                high: '1.5656',
                low: '1.5333',
                varBid: '0.0303',
                pctChange: '1.97',
                bid: '1.5642',
                ask: '1.5649',
                timestamp: '1659471482',
                create_date: '2022-08-02 17:18:02'
              },
              ETH: {
                code: 'ETH',
                codein: 'BRL',
                name: 'Ethereum/Real Brasileiro',
                high: '8.94998',
                low: '8.2',
                varBid: '392.1',
                pctChange: '4.72',
                bid: '8.69645',
                ask: '8.6921',
                timestamp: '1659470761',
                create_date: '2022-08-02 17:06:01'
              },
              XRP: {
                code: 'XRP',
                codein: 'BRL',
                name: 'XRP/Real Brasileiro',
                high: '2.1',
                low: '1.91',
                varBid: '0.15',
                pctChange: '8.35',
                bid: '1.97',
                ask: '1.98',
                timestamp: '1659470754',
                create_date: '2022-08-02 17:05:54'
              },
              DOGE: {
                code: 'DOGE',
                codein: 'BRL',
                name: 'Dogecoin/Real Brasileiro',
                high: '0.358767',
                low: '0.341794',
                varBid: '0.00362401',
                pctChange: '1.03',
                bid: '0.354591',
                ask: '0.354591',
                timestamp: '1659471509',
                create_date: '2022-08-02 17:18:29'
              }
            }
          },
          {
            id: 1,
            value: '3',
            currency: 'CAD',
            method: 'Dinheiro',
            tag: 'Alimentação',
            description: 'Pizza',
            exchangeRates: {
              USD: {
                code: 'USD',
                codein: 'BRL',
                name: 'Dólar Americano/Real Brasileiro',
                high: '5.284',
                low: '5.1856',
                varBid: '0.0986',
                pctChange: '1.9',
                bid: '5.2811',
                ask: '5.2836',
                timestamp: '1659473687',
                create_date: '2022-08-02 17:54:47'
              },
              USDT: {
                code: 'USD',
                codein: 'BRLT',
                name: 'Dólar Americano/Real Brasileiro Turismo',
                high: '5.3',
                low: '5.19',
                varBid: '0.085',
                pctChange: '1.63',
                bid: '5.14',
                ask: '5.45',
                timestamp: '1659468780',
                create_date: '2022-08-02 16:33:00'
              },
              CAD: {
                code: 'CAD',
                codein: 'BRL',
                name: 'Dólar Canadense/Real Brasileiro',
                high: '4.1084',
                low: '4.0271',
                varBid: '0.0664',
                pctChange: '1.65',
                bid: '4.1006',
                ask: '4.1028',
                timestamp: '1659473687',
                create_date: '2022-08-02 17:54:47'
              },
              GBP: {
                code: 'GBP',
                codein: 'BRL',
                name: 'Libra Esterlina/Real Brasileiro',
                high: '6.4292',
                low: '6.3192',
                varBid: '0.0755',
                pctChange: '1.19',
                bid: '6.4229',
                ask: '6.4264',
                timestamp: '1659473687',
                create_date: '2022-08-02 17:54:47'
              },
              ARS: {
                code: 'ARS',
                codein: 'BRL',
                name: 'Peso Argentino/Real Brasileiro',
                high: '0.04',
                low: '0.0393',
                varBid: '0.0006',
                pctChange: '1.65',
                bid: '0.0399',
                ask: '0.04',
                timestamp: '1659473687',
                create_date: '2022-08-02 17:54:47'
              },
              BTC: {
                code: 'BTC',
                codein: 'BRL',
                name: 'Bitcoin/Real Brasileiro',
                high: '123',
                low: '118.373',
                varBid: '8500',
                pctChange: '7.49',
                bid: '122',
                ask: '122',
                timestamp: '1659473313',
                create_date: '2022-08-02 17:48:33'
              },
              LTC: {
                code: 'LTC',
                codein: 'BRL',
                name: 'Litecoin/Real Brasileiro',
                high: '444.44',
                low: '286.7',
                varBid: '-20.32',
                pctChange: '-6.16',
                bid: '309.67',
                ask: '310.74',
                timestamp: '1659473320',
                create_date: '2022-08-02 17:48:40'
              },
              EUR: {
                code: 'EUR',
                codein: 'BRL',
                name: 'Euro/Real Brasileiro',
                high: '5.3748',
                low: '5.2971',
                varBid: '0.0514',
                pctChange: '0.97',
                bid: '5.3682',
                ask: '5.3729',
                timestamp: '1659473689',
                create_date: '2022-08-02 17:54:49'
              },
              JPY: {
                code: 'JPY',
                codein: 'BRL',
                name: 'Iene Japonês/Real Brasileiro',
                high: '0.03993',
                low: '0.03936',
                varBid: '0.0003',
                pctChange: '0.76',
                bid: '0.03967',
                ask: '0.03969',
                timestamp: '1659473685',
                create_date: '2022-08-02 17:54:45'
              },
              CHF: {
                code: 'CHF',
                codein: 'BRL',
                name: 'Franco Suíço/Real Brasileiro',
                high: '5.5194',
                low: '5.4391',
                varBid: '0.0585',
                pctChange: '1.07',
                bid: '5.5149',
                ask: '5.5198',
                timestamp: '1659473689',
                create_date: '2022-08-02 17:54:49'
              },
              AUD: {
                code: 'AUD',
                codein: 'BRL',
                name: 'Dólar Australiano/Real Brasileiro',
                high: '3.659',
                low: '3.5863',
                varBid: '0.0143',
                pctChange: '0.39',
                bid: '3.6535',
                ask: '3.6563',
                timestamp: '1659473687',
                create_date: '2022-08-02 17:54:47'
              },
              CNY: {
                code: 'CNY',
                codein: 'BRL',
                name: 'Yuan Chinês/Real Brasileiro',
                high: '0.7825',
                low: '0.7646',
                varBid: '0.0165',
                pctChange: '2.15',
                bid: '0.7819',
                ask: '0.7824',
                timestamp: '1659473642',
                create_date: '2022-08-02 17:54:02'
              },
              ILS: {
                code: 'ILS',
                codein: 'BRL',
                name: 'Novo Shekel Israelense/Real Brasileiro',
                high: '1.5668',
                low: '1.5333',
                varBid: '0.032',
                pctChange: '2.08',
                bid: '1.5658',
                ask: '1.5667',
                timestamp: '1659473643',
                create_date: '2022-08-02 17:54:03'
              },
              ETH: {
                code: 'ETH',
                codein: 'BRL',
                name: 'Ethereum/Real Brasileiro',
                high: '8.94998',
                low: '8.2',
                varBid: '437.12',
                pctChange: '5.27',
                bid: '8.73499',
                ask: '8.75204',
                timestamp: '1659473318',
                create_date: '2022-08-02 17:48:38'
              },
              XRP: {
                code: 'XRP',
                codein: 'BRL',
                name: 'XRP/Real Brasileiro',
                high: '2.1',
                low: '1.91',
                varBid: '0.16',
                pctChange: '8.79',
                bid: '1.98',
                ask: '1.98',
                timestamp: '1659473319',
                create_date: '2022-08-02 17:48:39'
              },
              DOGE: {
                code: 'DOGE',
                codein: 'BRL',
                name: 'Dogecoin/Real Brasileiro',
                high: '0.358767',
                low: '0.341794',
                varBid: '0.001491',
                pctChange: '0.42',
                bid: '0.354746',
                ask: '0.354746',
                timestamp: '1659473663',
                create_date: '2022-08-02 17:54:23'
              }
            }
          }
        ],
      }
    };

    renderWithRouterAndRedux(<Header />, {initialPath: '/carteira', initialState,})

    const logo = screen.getByRole('img')
    expect(logo).toHaveAttribute('src')
    expect(logo.src).toContain('trybe_logo.png')

    const emailField = screen.getByText('Email: tomaz@gmail.com')
    expect(emailField).toBeDefined()

})
  test('wallet', () => {
    // renderWithRouterAndRedux(<App />, {initialPath: '/carteira'});
    
    const {history} = renderWithRouterAndRedux(<App />);
    
    history.push('/carteira')
    const {pathname} = history.location
    expect(pathname).toBe('/carteira')
    
    // const title = screen.getByRole('heading', {name: 'Tabela de Despesas'})
    // expect(title).toBeInTheDocument()
  })
})
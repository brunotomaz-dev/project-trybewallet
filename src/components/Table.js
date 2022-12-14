import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editorExpenses, removeExpenses } from '../redux/actions';
import '../styles/wallet-table.css';

class Table extends Component {
  tableHeader = () => {
    const arrayHeader = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    return arrayHeader.map((item) => <th key={ item }>{item}</th>);
  };

  tableBody = () => {
    const { walletExpenses } = this.props;
    const neg = -1;
    const sort = walletExpenses.sort(
      (a, b) => {
        if (a.id < b.id) {
          return neg;
        }
        if (a.id > b.id) {
          return 1;
        }
        // a deve ser igual a b
        return 0;
      },
    );
    return sort.map((expense) => {
      const
        {
          currency,
          description,
          exchangeRates,
          id,
          method,
          tag,
          value,
        } = expense;
      const filterRares = Object.entries(exchangeRates)
        .filter((entry) => entry.includes(currency));
      const { ask, name } = filterRares[0][1];
      const converted = Number(value) * Number(ask);
      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{Number(value).toFixed(2)}</td>
          <td>{name}</td>
          <td>{Number(ask).toFixed(2)}</td>
          <td>{converted.toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button
              className="delete-btn"
              type="button"
              data-testid="delete-btn"
              onClick={ () => this.handleDeleteButton(id) }
            >
              Excluir
            </button>
            <button
              className="edit-btn"
              type="button"
              data-testid="edit-btn"
              onClick={ () => this.handleEditButton(id) }
            >
              Editar
            </button>
          </td>
        </tr>
      );
    });
  };

  handleEditButton = (itemID) => {
    const { editorStatus } = this.props;
    const storeAtualization = {
      idToEdit: itemID,
      editor: true,
    };
    editorStatus(storeAtualization);
  }

  handleDeleteButton = (itemID) => {
    const { walletExpenses, removeItems } = this.props;
    const filterToRemove = walletExpenses.filter((item) => itemID !== item.id);
    removeItems(filterToRemove);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>{this.tableHeader()}</tr>
        </thead>
        <tbody>{this.tableBody()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  walletExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeItems: (item) => { dispatch(removeExpenses(item)); },
  editorStatus: (newStatus) => { dispatch(editorExpenses(newStatus)); },
});

Table.propTypes = {
  walletExpenses: PropTypes.arrayOf(Object).isRequired,
  removeItems: PropTypes.func.isRequired,
  editorStatus: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

import React, { Component } from 'react';

export default class Table extends Component {
  tableHeader = () => {
    const arrayHeader = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
    ];
    return arrayHeader.map((item) => <th key={ item }>{item}</th>);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            {this.tableHeader()}
          </tr>
        </thead>
      </table>
    );
  }
}

import PropTypes from 'prop-types';
import Transaction from './Transaction';
import { TransTable } from './TransactionStyled';

export default function TransactionHistory({ transactions }) {
  return (
    <TransTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </tbody>
    </TransTable>
  );
}

Transaction.protTypes = {
  transactions: PropTypes.array,
  transaction: PropTypes.object,
};

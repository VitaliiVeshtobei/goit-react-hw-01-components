import Transaction from './Transaction';
export default function TransactionHistory({ transactions }) {
  return (
    <table class="transaction-history">
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
    </table>
  );
}

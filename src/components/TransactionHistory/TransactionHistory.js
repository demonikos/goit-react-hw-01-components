import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className='head'>Amount</th>
          <th className='head'>Currency</th>
          <th className='head'>Type</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

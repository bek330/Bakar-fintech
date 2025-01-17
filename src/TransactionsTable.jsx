import React from 'react';
import transactions from './transactions.json';

const TransactionsTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50"> {/* Added background to header */}
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Currency</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cardholder</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.currency}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.cardholder}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
import React, { useState } from 'react';
import styles from './DataTable.module.css'; // Import the module CSS
import { FaTrashAlt, FaEdit, FaAngleDoubleLeft } from 'react-icons/fa';

const DataTable = ({ data, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null); // State to track which payment is being edited
  const [newAmount, setNewAmount] = useState(''); // State for the new amount to be updated

  const handleAmountChange = (e) => {
    setNewAmount(e.target.value);
  };

  const handleUpdateAmount = (paymentId) => {
    onUpdate(paymentId, newAmount); // Pass paymentId and newAmount to the onUpdate handler
    setEditId(null); // Hide the input field after updating
    setNewAmount(''); // Clear the input field
  };

  return (
    <div>
      <h1>Payment Details</h1>
      <div className={styles['table-container']}>
        <table className={styles['styled-table']}>
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Payment ID</th>
              <th>Contract ID</th>
              <th>Payment Date</th>
              <th>Amount Paid</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.paymentId}>
                <td>{index + 1}</td>
                <td>{item.paymentId}</td>
                <td>{item.contractID}</td>
                <td>{item.paymentDate}</td>
                <td>
                  ${item.amountPaid.toLocaleString()}
                  {editId === item.paymentId ? (
                    <>
                      <input 
                        type="number" 
                        value={newAmount} 
                        onChange={handleAmountChange} 
                        placeholder="New Amount"
                      />
                      <button 
                        className={styles['btn'] + ' ' + styles['btn-warning']} // Use yellow button class
                        onClick={() => handleUpdateAmount(item.paymentId)}
                      >
                        <FaAngleDoubleLeft />
                      </button>
                    </>
                  ) : (
                    <button 
                      className={styles['btn'] + ' ' + styles['btn-warning']} 
                      onClick={() => setEditId(item.paymentId)}
                    >
                      <FaEdit />
                    </button>
                  )}
                </td>
                <td>{item.paymentStatus}</td>
                <td>
                  <button 
                    className={styles['btn'] + ' ' + styles['btn-danger']} // Use red button class
                    onClick={() => onDelete(item.paymentId)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;

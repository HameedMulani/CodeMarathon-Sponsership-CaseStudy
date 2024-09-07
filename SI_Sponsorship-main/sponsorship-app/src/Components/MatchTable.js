import React from 'react';
import styles from './MatchTable.module.css'; // Import the CSS module

const MatchTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className={styles.container}> {/* Apply container styles */}
      <h1 className={styles.heading}>Match Details</h1> {/* Apply heading styles */}
      <div className={styles.tableContainer}>
        <table className={styles.styledTable}>
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Match ID</th>
              <th>Match Date</th>
              <th>Location</th>
              <th>Match Name</th>
              <th>Total Amount of Payments</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.matchId}>
                <td>{index + 1}</td>
                <td>{item.matchId || 'N/A'}</td>
                <td>{item.matchDate || 'N/A'}</td>
                <td>{item.location || 'N/A'}</td>
                <td>{item.matchName || 'N/A'}</td>
                <td>${(item.totalAmountOfPayments || 0).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchTable;

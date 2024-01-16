import './App.css';

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    gap: '10px',
    backgroundColor: 'pink',
    padding: '10px',
  },
  gridItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '30px',
  },
  item1: {
    gridColumn: '2 / 5',
  },
};

function App() {
  return (
    <div style={styles.gridContainer}>
      <div style={styles.gridItem}>2</div>
      <div style={styles.gridItem}>3</div>
      <div style={styles.gridItem}>4</div>
      <div style={styles.gridItem}>5</div>
      <div style={styles.gridItem}>6</div>
      <div style={styles.gridItem}>7</div>
      <div style={styles.gridItem}>8</div>
      <div style={styles.gridItem}>9</div>
      <div style={styles.gridItem}>10</div>
      <div style={styles.gridItem}>11</div>
      <div style={styles.gridItem}>12</div>
      <div style={styles.gridItem}>13</div>
      <div style={styles.gridItem}>14</div>
      <div style={styles.gridItem}>15</div>
    </div>
  );
}

export default App;

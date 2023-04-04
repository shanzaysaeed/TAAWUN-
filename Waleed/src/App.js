// import React from 'react';

// const styles = {
//   container: {
//     backgroundColor: '#D5C6FF',
//     height: '100vh',
//     display: 'flex',
//   },
//   buttonContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     padding: '0 20px',
//     width: '180px',
//     backgroundColor: 'white',
//   },  
//   button: {
//     backgroundColor: 'white',
//     padding: '5px 5px',
//     borderRadius: '20px',
//     cursor: 'pointer',
//     marginBottom: '10px',
//     //textAlign: 'left',
//   },
//   button1: {
//     backgroundColor: 'white',
//     padding: '5px 5px',
//     borderRadius: '20px',
//     cursor: 'pointer',
//     marginBottom: '80px',
//   },
//   logout: {
//       backgroundColor: 'red',
//       padding: '10px 50px',
//       borderRadius: '10px',
//       cursor: 'pointer',
//       marginBottom: '10px',
//     },
// };

// const HomePage = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.buttonContainer}>
//         <button style={styles.button}>Home</button>
//         <button style={styles.button}>Campaigns</button>
//         <button style={styles.button}>Collaborations</button>
//         <button style={styles.button}>Donation Applications</button>
//         <button style={styles.button}>Donation History</button>
//         <button style={styles.button}>Map View</button>
//         <button style={styles.button}>Volunteer Position</button>
//         <button style={styles.button1}>Settings</button>
//         <button style={styles.logout}>Log Out</button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React from 'react';

const styles = {
  container: {
    backgroundColor: '#D5C6FF',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: '0 20px',
    width: '150px',
    backgroundColor: 'white',
  },  
  button: {
    backgroundColor: 'white',
    padding: '5px 5px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  button1: {
    backgroundColor: 'white',
    padding: '5px 5px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '80px',
  },
  logout: {
    backgroundColor: 'red',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  inputLabel: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  input: {
    padding: '5px 10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Home</button>
        <button style={styles.button}>Campaigns</button>
        <button style={styles.button}>Collaborations</button>
        <button style={styles.button}>Donation Applications</button>
        <button style={styles.button}>Donation History</button>
        <button style={styles.button}>Map View</button>
        <button style={styles.button}>Volunteer Position</button>
        <button style={styles.button1}>Settings</button>
        <button style={styles.logout}>Log Out</button>
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.inputLabel}>Enter Text 1:</label>
        <input type="text" style={styles.input} />
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.inputLabel}>Enter Text 2:</label>
        <input type="text" style={styles.input} />
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.inputLabel}>Enter Text 3:</label>
        <input type="text" style={styles.input} />
      </div>
    </div>
  );
};

export default HomePage;

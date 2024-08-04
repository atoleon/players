import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';

import './App.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBxZBKDr9_lMJmy7aoZe1A0x6NAAeMbAl0',
  authDomain: 'padel-fb663.firebaseapp.com',
  databaseURL:
    'https://padel-fb663-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'padel-fb663',
  storageBucket: 'padel-fb663.appspot.com',
  messagingSenderId: '773933376367',
  appId: '1:773933376367:web:dafbc1072d8670544a7e9a',
  measurementId: 'G-RT41YVV90X',
};

const cong = initializeApp(firebaseConfig);

function App() {
  const collection = 'players';
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize the Firebase database with the provided configuration
    const database = getDatabase(cong);

    // Reference to the specific collection in the database
    const collectionRef = ref(database, collection);

    // Function to fetch data from the database
    const fetchData = () => {
      // Listen for changes in the collection
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();

        // Check if dataItem exists
        if (dataItem) {
          // Convert the object values into an array
          const displayItem = Object.values(dataItem);
          setData(displayItem);
        }
      });
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Jugadores:</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{`${item.Jugador} [${item.Talla}]`}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

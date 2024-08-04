// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const cong = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default cong;

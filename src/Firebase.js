// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBeWd_mpBkaLogdPz3os7mOX1D3a1K3xw',
  authDomain: 'real-estate-app-13e92.firebaseapp.com',
  projectId: 'real-estate-app-13e92',
  storageBucket: 'real-estate-app-13e92.appspot.com',
  messagingSenderId: '254675845926',
  appId: '1:254675845926:web:8624f78fc821ec102877e7',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
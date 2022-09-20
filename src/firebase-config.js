// Connecting firebase to the backend
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtKS8aWM6aZ9YNmlQ2vJsfM3hcw7Z0bFk',
  authDomain: 'twitter-clone-2b162.firebaseapp.com',
  projectId: 'twitter-clone-2b162',
  storageBucket: 'twitter-clone-2b162.appspot.com',
  messagingSenderId: '986711873013',
  appId: '1:986711873013:web:6ccbf90318328c93bf3cbc',
  measurementId: 'G-PPX7C3VPVZ',
};

// init firebase app
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// pull the database in

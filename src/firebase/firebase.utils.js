import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyATr-ZEIhpy4hviVBsfV_EL4UZah9HNQ3Y',
  authDomain: 'crown-clothing-b95c3.firebaseapp.com',
  databaseURL: 'https://crown-clothing-b95c3.firebaseio.com',
  projectId: 'crown-clothing-b95c3',
  storageBucket: '',
  messagingSenderId: '662293642387',
  appId: '1:662293642387:web:ee97848185efa540'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

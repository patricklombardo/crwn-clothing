import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDbGJKpQYEJkcNoFCGtZbCD2m5HlslEk7Q",
  authDomain: "crwn-db-f8cc6.firebaseapp.com",
  databaseURL: "https://crwn-db-f8cc6.firebaseio.com",
  projectId: "crwn-db-f8cc6",
  storageBucket: "crwn-db-f8cc6.appspot.com",
  messagingSenderId: "407325496156",
  appId: "1:407325496156:web:49006e93b5805488d9a799",
  measurementId: "G-QRD5BWHFW7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
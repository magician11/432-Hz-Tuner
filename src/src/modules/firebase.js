import * as firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtLz5LuaERz5gMS7EScxFShhqKPg2wazU',
  authDomain: 'hz-432.firebaseapp.com',
  databaseURL: 'https://hz-432.firebaseio.com',
  projectId: 'hz-432',
  storageBucket: '',
  messagingSenderId: '453737781045',
  appId: '1:453737781045:web:4b0b50e87d9e80c2'
};

firebase.initializeApp(firebaseConfig);

const fetchAllMusic = async () => {
  try {
    const snapshot = await firebase
      .database()
      .ref('music')
      .once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

export { fetchAllMusic };

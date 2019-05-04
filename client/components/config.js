import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBX1Yf-27W4dDXtPiaZvQYAzoZqElOmBZ8",
  authDomain: "react-native-crud-62dff.firebaseapp.com",
  databaseURL: "https://react-native-crud-62dff.firebaseio.com",
  projectId: "react-native-crud-62dff",
  storageBucket: "react-native-crud-62dff.appspot.com",
  messagingSenderId: "872628593888"
};
const app = firebase.initializeApp(config);  
export const db = firebase.database()
  

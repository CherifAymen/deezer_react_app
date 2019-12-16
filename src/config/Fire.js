import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCRm-_z-xi0Z1LvDzy8w1MOeuSwKKtnk44",
  authDomain: "deezer-341b3.firebaseapp.com",
  databaseURL: "https://deezer-341b3.firebaseio.com",
  projectId: "deezer-341b3",
  storageBucket: "deezer-341b3.appspot.com",
  messagingSenderId: "617652661731",
  appId: "1:617652661731:web:75e6183f89943d0c45c4d6",
  measurementId: "G-7N375FYCMF"
};
const fire = firebase.initializeApp(config);
export default fire;

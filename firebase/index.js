// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDiVXwkhzR5A09wCfvd_op2FTP6RKaCpX8',
  databaseURL: 'https://pomodoropro.firebaseio.com',
  authDomain: 'pomodoropro.firebaseapp.com',
  storageBucket: 'gs://pomodoropro.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp

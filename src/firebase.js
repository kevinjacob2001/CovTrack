import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAlubYYClKeBeVyEF_3iwSeAnII5MnXjTI",
    authDomain: "covtrack19.firebaseapp.com",
    projectId: "covtrack19",
    storageBucket: "covtrack19.appspot.com",
    messagingSenderId: "671754797847",
    appId: "1:671754797847:web:63de779113850763bbed52"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const db=firebaseApp.firestore();
  export {auth,provider}  
  export default db;
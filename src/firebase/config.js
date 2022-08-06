import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_uSur4GKnWpfU71ALOfoxPhQ5lubvzyw",
    authDomain: "vue-blog-bca45.firebaseapp.com",
    projectId: "vue-blog-bca45",
    storageBucket: "vue-blog-bca45.appspot.com",
    messagingSenderId: "940179995332",
    appId: "1:940179995332:web:e229f79252891a24f76791"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZCi3Mhuay60uuzpT-0zcC0YOMarKjTPY",
  authDomain: "vit-hackathon-893a3.firebaseapp.com",
  databaseURL: "https://vit-hackathon-893a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vit-hackathon-893a3",
  storageBucket: "vit-hackathon-893a3.appspot.com",
  messagingSenderId: "692203131104",
  appId: "1:692203131104:web:3378b580401ce9bb3bc085",
  measurementId: "G-CPKK9RCXRR"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}

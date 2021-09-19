import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDh3OZAbA5_fBEKZP0hK2kiBq2m4Xkx3wE",
  authDomain: "conic-688fe.firebaseapp.com",
  projectId: "conic-688fe",
  storageBucket: "conic-688fe.appspot.com",
  messagingSenderId: "651633604777",
  appId: "1:651633604777:web:92a9c18e116757d65a11b8",
  measurementId: "G-Y49ZMR60EC"
};
//Firebase Configuration Setup.
const app = initializeApp(firebaseConfig);

export default app;
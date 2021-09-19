
import { getAuth, signInAnonymously } from "firebase/auth";
import firebaseApp from '../services/firebase_app';


export default class AuthService {




  static signInUser() {
    const auth = getAuth(firebaseApp);
    return signInAnonymously(auth);
  }


}








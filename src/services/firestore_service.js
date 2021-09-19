import { getFirestore, getDoc, doc, } from "firebase/firestore";
import firebaseApp from '../services/firebase_app';

export default class FirestoreService {

  static async getUserData(userId) {
    const db = getFirestore(firebaseApp);

    const docRef = doc(db, 'users', userId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }

    return this.getUserData('eAX6MMLmSIh1TRrO65DaZGo5jXU2');
  }
}
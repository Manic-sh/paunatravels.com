import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';


export const collectionRef = collection(db, 'products');

// console.log(collectionRef);
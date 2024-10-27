import { collection, addDoc } from 'firebase/firestore';
import { database } from './firebaseSetup';


export async function writeToDB(collectionName, data) {
  try {
    const docRef = await addDoc(collection(database, collectionName), data);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
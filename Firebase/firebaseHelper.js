import { collection, addDoc } from 'firebase/firestore/lite';


export async function writeToDB(collectionName, data) {
  try {
    const docRef = await addDoc(collection(collectionName), data);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
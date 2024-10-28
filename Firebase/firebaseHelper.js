import {
    collection, addDoc,
    doc, updateDoc, deleteDoc
} from 'firebase/firestore';
import { database } from './firebaseSetup';


export async function writeToDB(collectionName, data) {
    try {
        const docRef = await addDoc(collection(database, collectionName), data);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

export async function updateDB(collectionName, docId, data) {
    try {
        const docNew = doc(database, collectionName, docId);
        await updateDoc(docNew, data);

    } catch (e) {
        console.error('Error updating document: ', e);
    }
}

export async function deleteDB(collectionName, docId) {
    try {
        const docNew = doc(database, collectionName, docId);
        await deleteDoc(docNew);

    } catch (e) {
        console.error('Error deleting document: ', e);
    }
}

import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import db from './firebaseSet';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('category', '==', idCategory));
    } else {
        q = query(collection(db, "products"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data()
        }
    } else {
        console.log("No such document!");
    }
}
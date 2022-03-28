import { query, orderBy, where, getDocs } from '@firebase/firestore';
import { doc, getDoc, collection } from 'firebase/firestore';
import db from './firebaseSet';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('category', "==" ,idCategory));
    } else {
        q = query(collection(db, "products"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    console.log(dataFromFirestore);
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idDetails) => {
    const docRef = doc(db, "products", idDetails);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
             id: idDetails,
             ...docSnap.data()
        }
   }
}
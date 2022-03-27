import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import db from './firebaseSet';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('category', idCategory));
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
    
    
    /*return docSnap.docs.map(document => ({
        id: document.id,
        ...document.data()
    }))*/
    
    
    /*const docList = docSnap.docs.map(doc => doc.data());
    console.log(docList);

    if (docSnap) {
        return {
            id: id,
            ...docList.data()
        }
    } else {
        console.log("No such document!");
    }*/
}
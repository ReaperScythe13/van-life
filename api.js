// Import the functions you need from the SDKs you need
import { doc, getDoc, getDocs, query, where} from "firebase/firestore/lite";
import { db, vansCollectionRef } from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase





export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map(doc =>({
        ...doc.data() ,
        id: doc.id
    }) )
    
    return vans;
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id);
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans(id) {
    const q = query(vansCollectionRef, where("hostId", "==", "123"));
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post",
           headers: {
            "Content-Type": "application/json"  // ✅ required!
        }, 
          body: JSON.stringify(creds) },
          
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

import {db} from './firebase';
import {doc, getDoc, setDoc, addDoc} from "firebase/firestore";


export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;

    // const userRef = firestore.doc(`users/${userAuth.uid}`);
    const profileRef = doc(db, "profiles", user.uid);

    const snapShot = await getDoc(profileRef);

    console.log("doing")
    const {displayName, email} = user;
    const createdAt = new Date();
    const userSettings = {
        displayName,
        email,
        createdAt,
        elo: 1000, // default elo
        ...additionalData
    };

    try {
        await setDoc(profileRef, userSettings);
    } catch (error) {
        console.log('error creating user', error.message);
    }


    return profileRef;
}
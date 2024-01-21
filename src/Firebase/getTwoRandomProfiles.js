import {db, auth} from "./firebase";
import {collection, getDocs, doc, getDoc, setDoc, addDoc} from "firebase/firestore";


export const getTwoRandomProfiles = async () => {
    const profilesRef = collection(db, "profiles");
    const profilesSnapshot = await getDocs(profilesRef);
    const profiles = [];
    profilesSnapshot.forEach((doc) => {
        profiles.push(doc.data());
    });
    const num1 = Math.floor(Math.random() * profiles.length);
    let num2 = Math.floor(Math.random() * profiles.length);
    while (num1 === num2) {
        num2 = Math.floor(Math.random() * profiles.length);
    }
    const randomUID1 = profiles[num1];
    const randomUID2 = profiles[num2];
    return [randomUID1, randomUID2];
}
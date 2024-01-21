import React from 'react';
import {db} from "../Firebase/firebase";
import {getDoc, docs, updateDoc, doc, setDoc, collection} from "firebase/firestore";


export const updateElo = async (userid, newElo) => {
    console.log('updating elo')
    console.log(userid, newElo)

    const userRef = doc(db, "profiles", userid);

    await updateDoc(userRef, {
        elo: newElo
    });
    console.log('elo updated')


}
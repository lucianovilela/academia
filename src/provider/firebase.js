import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/'
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user)=>{
    console.debug(user);
});

export const createUser=({email, password})=>{
   return  firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const loginEmail=({email, password})=>{
    return  firebase.auth().signInWithEmailAndPassword(email, password);
 }

 export const loginGoogle=()=>{
     return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }

 export const loginFacebook=()=>{
    return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
}
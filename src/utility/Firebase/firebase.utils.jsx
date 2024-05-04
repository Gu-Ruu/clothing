import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD_C6CsVI1CviLGRYe-YA0H3Eono39Ez0",
  authDomain: "crwn-clothing-db-242be.firebaseapp.com",
  projectId: "crwn-clothing-db-242be",
  storageBucket: "crwn-clothing-db-242be.appspot.com",
  messagingSenderId: "172227089370",
  appId: "1:172227089370:web:a97d8606f082fab41ce6e3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, GoogleProvider);
export const DB = getFirestore();

export const addCollectionandDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(DB, collectionKey);

  const batch = writeBatch(DB);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    console.log(docRef);
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(DB, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  );

};
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(DB, "users", userAuth.uid);
  // console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the error", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserwithEmailAndpassword = async (email, Password) => {
  if (!email || !Password) return;

  return await createUserWithEmailAndPassword(auth, email, Password);
};

export const signInAuthuserWithEmailAndPassword = async (email, Password) => {
  if (!email || !Password) return;

  return await signInWithEmailAndPassword(auth, email, Password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

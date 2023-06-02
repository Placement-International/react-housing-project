import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCor1_K9LOKPBD0FqsgjFK5tfKbmakHGzU",
  authDomain: "pi-housing.firebaseapp.com",
  projectId: "pi-housing",
  storageBucket: "pi-housing.appspot.com",
  messagingSenderId: "363240984586",
  appId: "1:363240984586:web:11ffcbdf4d695da6a40ff3",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  try {
    signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }

}

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  //console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  //sconsole.log(userSnapshot.exists());

  //if user data does not exist
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
      console.log("error creating the user", error.message);
    }
  }
  //if user data exists
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//get all the properties - usefull for admin, will have to changed to verified for the public
export const allProperties = async() => {
  const propertiesRef = collection(db, 'properties');
  const snapshot = await getDocs(propertiesRef);

  const properties = snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });
  console.log(properties)
  return properties;
  };



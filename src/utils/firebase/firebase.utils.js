import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCor1_K9LOKPBD0FqsgjFK5tfKbmakHGzU",
  authDomain: "pi-housing.firebaseapp.com",
  projectId: "pi-housing",
  storageBucket: "pi-housing.appspot.com",
  messagingSenderId: "363240984586",
  appId: "1:363240984586:web:11ffcbdf4d695da6a40ff3"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
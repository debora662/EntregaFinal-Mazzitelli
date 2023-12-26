import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKZAw1lorAA7TKE3ZeHSFruR_vS3xZdBI",
    authDomain: "agatha-ecommerce.firebaseapp.com",
    projectId: "agatha-ecommerce",
    storageBucket: "agatha-ecommerce.appspot.com",
    messagingSenderId: "801781335588",
    appId: "1:801781335588:web:1cc9d83bf3d6f16fe83ab1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
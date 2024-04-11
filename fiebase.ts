import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA2hCTR7mIArv_XLpPgG6oeO6JdHdmVGqQ",
    authDomain: "dropbox-clone-3683f.firebaseapp.com",
    projectId: "dropbox-clone-3683f",
    storageBucket: "dropbox-clone-3683f.appspot.com",
    messagingSenderId: "994890538702",
    appId: "1:994890538702:web:97ad6973f6610185a33a9f"
  };
  
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db, storage};
  
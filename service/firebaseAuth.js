import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

let rnInitializeAuth = null;
let rnGetReactNativePersistence = null;

try {
  const rnAuth = require("firebase/auth/react-native");
  rnInitializeAuth = rnAuth.initializeAuth;
  rnGetReactNativePersistence = rnAuth.getReactNativePersistence;
} catch (e) {
  rnInitializeAuth = null;
  rnGetReactNativePersistence = null;
  console.log(e)
}

const firebaseConfig = {
  apiKey: "AIzaSyDOr2wHR960R0Z2jm2Vu3VZZeLRDkaTuxo",
  authDomain: "react-native-auth-demo-e40b0.firebaseapp.com",
  projectId: "react-native-auth-demo-e40b0",
  storageBucket: "react-native-auth-demo-e40b0.firebasestorage.app",
  messagingSenderId: "577270414900",
  appId: "1:577270414900:web:72d452de3533a847199461",
};

let auth;

if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig);

  if (rnInitializeAuth && rnGetReactNativePersistence) {
    auth = rnInitializeAuth(app, {
      persistence: rnGetReactNativePersistence(AsyncStorage),
    });
  } else {
    auth = getAuth(app);
  }
} else {
  auth = getAuth();
}

export { auth };
export default auth;

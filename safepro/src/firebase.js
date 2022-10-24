import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDQUyH9ruRUElvwSt8vzB4JNT7i3nCiebI",
    authDomain: "safepro-b583d.firebaseapp.com",
    databaseURL: "https://safepro-b583d-default-rtdb.firebaseio.com",
    projectId: "safepro-b583d",
    storageBucket: "safepro-b583d.appspot.com",
    messagingSenderId: "1033540986033",
    appId: "1:1033540986033:web:257599a0ed4e876cb3ee90",
    measurementId: "G-3CFZZ01L18"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://safepro-b583d.appspot.com");
export default storage;
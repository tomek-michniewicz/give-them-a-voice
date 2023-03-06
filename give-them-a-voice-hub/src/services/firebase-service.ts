// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT1UGbLJIzB5L7U01aePvMa8GeSwUwcq8",
  authDomain: "give-them-a-voice.firebaseapp.com",
  projectId: "give-them-a-voice",
  storageBucket: "give-them-a-voice.appspot.com",
  messagingSenderId: "453349614061",
  appId: "1:453349614061:web:a4260914480386427e87e4",
  measurementId: "G-PZ5T1RBEZZ",
};

// VoiceRecording interface
export interface VoiceRecording {
  uid: string;
  date: string;
  recording: string;
  transcription: string;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

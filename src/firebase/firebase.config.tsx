import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: `${process.env.FIREBASE_API_KEY}`,
//   authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
//   projectId: `${process.env.FIREBASE_PROJECT_ID}`,
//   storageBucket: `${process.env.FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.FIREBASE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.FIREBASE_APP_ID}`
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAOo8T9FaJQvo54FBP-9n2U9kuKcgm0-o8',
  authDomain: 'administrations-85e06.firebaseapp.com',
  projectId: 'administrations-85e06',
  storageBucket: 'administrations-85e06.firebasestorage.app',
  messagingSenderId: '753360044376',
  appId: '1:753360044376:web:03a4a97211a0db1219e52d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

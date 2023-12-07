// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDQ4qtHzxj7AgmAXhH3yA7oz-X15YesmrQ',
  authDomain: 'outsourcing-23966.firebaseapp.com',
  projectId: 'outsourcing-23966',
  storageBucket: 'outsourcing-23966.appspot.com',
  messagingSenderId: '324770430015',
  appId: '1:324770430015:web:b4770e216add892f228c8a',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const { storage } = getStorage(app);

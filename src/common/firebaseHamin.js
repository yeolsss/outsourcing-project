// 하민 개인 체크용 firebase key
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDQ4qtHzxj7AgmAXhH3yA7oz-X15YesmrQ',
  authDomain: 'outsourcing-23966.firebaseapp.com',
  projectId: 'outsourcing-23966',
  storageBucket: 'outsourcing-23966.appspot.com',
  messagingSenderId: '324770430015',
  appId: '1:324770430015:web:b4770e216add892f228c8a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);

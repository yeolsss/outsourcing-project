// // Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDQ4qtHzxj7AgmAXhH3yA7oz-X15YesmrQ',
//   authDomain: 'outsourcing-23966.firebaseapp.com',
//   projectId: 'outsourcing-23966',
//   storageBucket: 'outsourcing-23966.appspot.com',
//   messagingSenderId: '324770430015',
//   appId: '1:324770430015:web:b4770e216add892f228c8a',
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const { storage } = getStorage(app);

///---------------------------------------------

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//   apiKey: 'AIzaSyDQ4qtHzxj7AgmAXhH3yA7oz-X15YesmrQ',
//   authDomain: 'outsourcing-23966.firebaseapp.com',
//   projectId: 'outsourcing-23966',
//   storageBucket: 'outsourcing-23966.appspot.com',
//   messagingSenderId: '324770430015',
//   appId: '1:324770430015:web:b4770e216add892f228c8a',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

//------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
//앱을 초기화한 후에 내보내기 기능 실행
export default getFirestore(app);

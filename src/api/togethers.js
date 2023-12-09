import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../common/firebase';

const COLLECTION_TOGETHERS = collection(db, 'togethers');

// firestore 데이터 추가 로직
export const addTogetherToFireBase = async (newTogether) => {
  try {
    const docRef = await addDoc(COLLECTION_TOGETHERS, newTogether);
    return docRef.id;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const removeTogetherToFireBase = async (docId) => {
  try {
    console.log('togheters.js removeTogetherToFireBase docId', docId);
    await deleteDoc(COLLECTION_TOGETHERS, docId);
  } catch (err) {
    throw err;
  }
};

export const updateTogetherToFireBase = async ({ docId, updateTogether }) => {
  try {
    await updateDoc(doc(COLLECTION_TOGETHERS, docId), updateTogether);
  } catch (err) {
    throw err;
  }
};

/*const addTogether = async (newTogether) => {
  await addTogetherToFireBase(newTogether);
};*/

// 조회
export const getLists = async () => {
  const response = await getDocs(collection(db, 'togethers'));
  return response.docs.map((doc) => {
    return { ...doc.data(), docId: doc.id };
  });
};

//----------------------------------
//조회
// const getTogethers = async () => {
//   const response = await axios.get(`${process.env.REACT_APP_APIKEY}/togethers`);
//   console.log('?', response.data);
//   return response.data;
// };

// export const getTogethers = async () => {
//   const response = await axios.get(
//     `AIzaSyDQ4qtHzxj7AgmAXhH3yA7oz-X15YesmrQ/togethers`,
//   );
//   console.log('?', response.data);
//   return response.data;
// };

// export const getTogethers = async () => {
//   onSnapshot(collection(db, 'togethers'), (snapshot) => {
//     console.log(
//       snapshot.docs.map((doc) => {
//         doc.data();
//       }),
//     );
//     console.log('snapshopt.docs', snapshot.docs);
//     console.log('snapshopt.docs…', snapshot.docs);
//   });
// };

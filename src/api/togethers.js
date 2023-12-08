import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../common/firebase';

// firestore 데이터 추가 로직
export const addTogetherToFireBase = async (newTogether) => {
  try {
    const collectionRef = collection(db, 'togethers');
    console.log({ collectionRef });
    const payload = newTogether;
    console.log({ payload });
    const docRef = await addDoc(collectionRef, payload);
    console.log('새 투게더 아이디 : ', docRef.id);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addTogether = async (newTogether) => {
  await addTogetherToFireBase(newTogether);
};

// 조회
const getLists = async () => {
  const response = await getDocs(collection(db, 'togethers'));
  const fechData = response.docs.map((doc) => doc.data());
  console.log(fechData);
  return fechData;
};

export { addTogether, getLists };

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

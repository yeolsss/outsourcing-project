import { useMutation } from '@tanstack/react-query';
import { addDoc, collection } from 'firebase/firestore';
import db from '../common/firebaseHamin';

// 데이터 추가 로직 (firestore)
export const addTogetherToFireBase = async (newTogether) => {
  try {
    const collectionRef = collection(db, 'togethers');
    const payload = newTogether;
    const docRef = await addDoc(collectionRef, payload);
    console.log('새 투게더 아이디 : ', docRef.id);
  } catch (error) {
    console.error(error);
    throw error; // 에러를 상위로 전파하여 처리
  }
};

const addTogether = (newTogether) => {
  return useMutation(addTogetherToFireBase);
};

//export 하기
export { addTogether };

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

//추가
// export const addTogetherToFireBase = async () => {
//   try {
//     const collectionRef = collection(db, 'togethers');
//     const payload = newTogether;
//     const docRef = await addDoc(collectionRef, payload);
//     console.log('새 투게더 아이디 : ', docRef.id);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const addTogether = async (newTogether) => {
//   return useMutation(addTogetherToFireBase);
//   // await axios.post(
//   //   `AIzaSyDQ4qtHzxj7AgmAXhH3yA7oz-X15YesmrQ/togethers`,
//   //   newTogether,
//   // );
// };

// export { addTogether };

// export const useAddTogetherMutation = () => {
//   return useMutation(addTogetherToFireBase);
// };

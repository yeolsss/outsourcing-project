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

// 1 안. 하지만 오류 뜸. React Hook "useMutation" is called in function "addTogether" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use"  react-hooks/rules-of-hooks Search for the keywords to learn more about each error.
const addTogether = (newTogether) => {
  return useMutation(addTogetherToFireBase);
};

//export 하기
export { addTogether };

// 2안.
// export const useAddTogetherMutation = () => {
//   return useMutation(addTogetherToFireBase);
// };
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

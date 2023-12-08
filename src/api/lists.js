import { collection, getDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../common/firebase';

// 조회
const getLists = async () => {
  const response = await getDocs(collection(db, 'togethers'));
  const fechData = response.docs.map((doc) => doc.data());
  console.log(fechData);
  return fechData;
};

export { getLists };

// getDocs는 axios.get()이당
// useEffect(() => {
//   const fechData = async () => {
//     const querySnapshot = await getDocs(collection(db, 'lists'));
//     const newArr = [];
//     querySnapshot.forEach((doc) => {
//       // console.log(`${doc.id} => ${doc.data()}`);
//       newArr.push(doc.data());
//     });

//     setList(newArr);
//   };
//   fechData();
// }, []);
export const fetchToGetherData = async (id) => {
  const docRef = doc(db, 'togethers', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

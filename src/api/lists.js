import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../common/firebase';

// 조회
const getLists = async () => {
  const response = await getDocs(collection(db, 'togethers'));
  const fechData = response.docs.map((doc) => doc.data());
  return fechData;
};

export { getLists };

export const fetchToGetherData = async (id) => {
  const docRef = doc(db, 'togethers', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

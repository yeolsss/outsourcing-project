import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { db } from '../common/firebase';

const FIREBASE_COLLECTION_NAME = 'togethers';

const COLLECTION_TOGETHERS = collection(db, FIREBASE_COLLECTION_NAME);

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
    await deleteDoc(doc(COLLECTION_TOGETHERS, docId));
  } catch (error) {
    throw error;
  }
};

export const updateTogetherToFireBase = async ({ docId, updateTogether }) => {
  try {
    await updateDoc(doc(COLLECTION_TOGETHERS, docId), updateTogether);
  } catch (error) {
    throw error;
  }
};

export const getLists = async () => {
  const response = await getDocs(COLLECTION_TOGETHERS);
  return response.docs
    .filter((doc) => !doc.data().isDone)
    .map((doc) => {
      return { ...doc.data(), docId: doc.id };
    });
};

export const deleteImagesInStorage = async (imgPath) => {
  const storage = getStorage();
  const dirRef = ref(storage, `togetherImages/${imgPath}`);
  await deleteObject(dirRef);
};

export const fetchTogetherData = async (id) => {
  const docRef = doc(db, 'togethers', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

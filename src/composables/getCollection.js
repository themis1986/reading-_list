import { ref, watchEffect } from "vue";

//firebase imports
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const getCollection = (c) => {
  const documents = ref(null);

  //collection reference
  let colRef = collection(db, c);

  const unsubscribe = onSnapshot(colRef, (snapshot) => {
    let results = [];
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { documents };
};

export default getCollection;

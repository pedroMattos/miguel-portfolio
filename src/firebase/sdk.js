import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { collection, query, where, getFirestore, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

async function teste() {
  const dbReference = getFirestore(app);
  // const jobs = collection(dbReference, "jobs");

  // const jobs = collection('miguel-melo-design-test-bd', 'jobs');
  const querySnapshot = await getDocs(collection(dbReference, "jobs"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}


export const app = initializeApp(firebaseConfig);
teste();

import { app } from "@/firebase/sdk";
import { collection, getFirestore, getDocs } from "firebase/firestore";

export default async function getProject() {
  const dbReference = getFirestore(app);
  const querySnapshot = await getDocs(collection(dbReference, "works"));
  return querySnapshot.docs.map((doc) => doc.data());
}

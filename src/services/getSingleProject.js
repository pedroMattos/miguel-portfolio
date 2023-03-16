import { app } from "@/firebase/sdk";
import {
  collection,
  query,
  where,
  getFirestore,
  getDocs,
} from "firebase/firestore";

export default async function getSingleProject(slug) {
  const dbReference = getFirestore(app);
  const queriedDocument = query(
    collection(dbReference, "works"),
    where("slug", "==", slug)
  );
  const querySnapshot = await getDocs(queriedDocument);

  return querySnapshot.docs.map((doc) => doc.data()).at(0);
}

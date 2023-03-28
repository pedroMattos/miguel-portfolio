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
  let querySnapshot;
  try {
    querySnapshot = await getDocs(queriedDocument);
  } catch (e) {
    console.log(e);
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return querySnapshot.docs.map((doc) => doc.data()).at(0);
  }
}

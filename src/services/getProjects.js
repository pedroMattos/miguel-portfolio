import { app } from "@/firebase/sdk";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

export default async function getProject() {
  const dbReference = getFirestore(app)
  const jobs = collection(dbReference, 'jobs/jobs/');
  const jobsSnapshot = await getDocs(jobs);
  // const jobsList = jobsSnapshot.docs.map(doc => doc.data());

  console.log({ dbReference, jobs });
}

"use client";
import styles from "./card.module.css";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { query, collection } from "firebase/firestore";
import { firestore } from "@/services/firebaseService";
import { Card } from "..";

const CardParent = () => {
  const ref = query(collection(firestore, "articles"));
  const queryHook = useFirestoreQuery(["articles"], ref);
  if (queryHook.isLoading) {
    return <div>Loading...</div>;
  }
  const snapshot = queryHook.data as any;

  return snapshot.docs.map((docSnapshot: any) => {
    const article = docSnapshot.data();
    return (
      <>
        <div key={docSnapshot.id} className={styles.card_parent}>
          <Card data={article} />
        </div>
      </>
    );
  });
};

export default CardParent;

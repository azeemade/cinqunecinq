"use client";
import Image from "next/image";
import styles from "./table.module.css";
import {
  useFirestoreQuery,
  useFirestoreDocumentDeletion,
  useFirestoreTransaction,
} from "@react-query-firebase/firestore";
import {
  query,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
  doc,
} from "firebase/firestore";
import { firestore } from "@/services/firebaseService";
import { useState } from "react";
import { Button, Dropdown } from "..";
import { useBoundStore } from "@/app/store";
import { useRouter } from "next/navigation";

export default function TableRow() {
  const [dropdownId, setDropdownState] = useState("");
  const ref = query(collection(firestore, "articles"));
  const router = useRouter();
  const setArticle = useBoundStore((state) => state.setArticle);

  const collectionDoc = collection(firestore, "articles");
  // if (dropdownId) {
  // const ref2 = doc(collectionDoc, dropdownId);
  // const mutation = useFirestoreDocumentDeletion(ref2);
  // }

  // Provide the query to the hook
  const queryHook = useFirestoreQuery(["articles"], ref);
  if (queryHook.isLoading) {
    return <tr aria-rowspan={3}>Loading...</tr>;
  }
  const snapshot = queryHook.data as any;

  return snapshot.docs.map((docSnapshot: any) => {
    const article = docSnapshot.data();
    return (
      <tr key={docSnapshot.id}>
        <td className={styles.table_data}>
          <div className={styles.author}>
            <Image
              src={
                "https://ui-avatars.com/api/?name=admin&background=random&rounded=true"
              }
              alt="admin author"
              width={32}
              height={32}
            />
            <div className="grid">
              <b>Admin</b>
              <span className="text-xs">
                <i>author</i>
              </span>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{article.title}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {article.created_at}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
          <button
            type="button"
            className="inline-block text-gray-500 hover:text-gray-700"
            onClick={() =>
              setDropdownState(dropdownId === "" ? docSnapshot.id : "")
            }
          >
            <svg
              className="inline-block h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
            </svg>
          </button>
          <Dropdown
            id={"dd_id" + docSnapshot.id}
            style={"z-[10000]"}
            isOpen={dropdownId === docSnapshot.id ? true : false}
            content={
              <>
                {/* <Link
                  href={"/admin" + article.slug}
                  className={styles.menu_item}
                >
                  Edit
                </Link> */}
                <Button
                  type={"button"}
                  content={"Edit"}
                  style={styles.menu_item + " " + "w-full float-left"}
                  onClick={() => {
                    setArticle({ article: article });
                    router.push("admin/edit/" + article.slug);
                  }}
                />
                <Button
                  type={"button"}
                  content={"Delete"}
                  style={styles.menu_item + " " + "w-full float-left"}
                />
              </>
            }
          />
        </td>
      </tr>
    );
  });
}

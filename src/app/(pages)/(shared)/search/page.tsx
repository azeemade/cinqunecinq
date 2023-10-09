"use client";
import { Search } from "@/app/components";
import { useSearchParams } from "next/navigation";
import styles from "./_search.module.css";
export default function Page() {
  return (
    <>
      <div className={styles.search_page_container}>
        <div className={styles.search_page_searchbar}>
          <Search />
        </div>
        <div className={styles.search_page_background}></div>
        <div className="h-100 bg-red-900"></div>
      </div>
    </>
  );
}

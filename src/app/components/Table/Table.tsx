import Link from "next/link";
import styles from "./table.module.css";
import TableRow from "./TableRow";

export default function Table() {
  return (
    <>
      <div className="flex justify-end">
        <Link href={"/admin/create"} className={styles.link}>
          Create Article
        </Link>
      </div>
      <div className={styles.table_container}>
        <div className={styles.table_container_inner}>
          <div>
            <h2 className={styles.table_title}>Articles</h2>
          </div>
          <div className={styles.table_wrapper}>
            <div className={styles.table_wrapper_inner}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.tr_head}>Author</th>
                    <th className={styles.tr_head}>Title</th>
                    <th className={styles.tr_head}>Created at</th>
                    <th className={styles.tr_head_action}></th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

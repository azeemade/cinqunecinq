import Image from "next/image";
import styles from "./card.module.css";
import { FC } from "react";
import Link from "next/link";

interface CardInterface {
  data: any;
}

const Card: FC<CardInterface> = ({ data }) => {
  return (
    <>
      <div className={styles.card_container}>
        <div>
          <h4 className={styles.leading_text}>{data.title}</h4>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          {/* <Link href={"/" + data.slug} className={styles.link}>
            Go to article
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Card;

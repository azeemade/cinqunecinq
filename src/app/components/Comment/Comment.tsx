"use client";
import { FC, useState } from "react";
import { Button, Inputs } from "..";
import styles from "./comment.module.css";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { firestore } from "@/services/firebaseService";
import { collection } from "firebase/firestore";
import CurrentDate from "@/utils/helpers/currentdate";
import { useBoundStore } from "@/app/store";

interface CommentInterface {
  article_id: string | number;
  name: string;
  comment: string;
  errStatus: boolean;
}

const Comment: FC<CommentInterface> = ({ article_id }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [errStatus, setErrStatus] = useState(false);

  const user = useBoundStore((state) => state.user);
  const setUser = useBoundStore((state) => state.setUser);

  const handleSubmit = (e: any) => {
    e.preventDefault;

    if (name === "" && comment === "") {
      setErrStatus(true);
    } else {
      const ref = collection(firestore, "comments");
      const mutation = useFirestoreCollectionMutation(ref);

      setUser({ ...user, name: name });

      let data: any = {
        article_id: article_id,
        comment: comment,
        user_id: 1,
        id: Math.floor(Math.random() * 1000000),
        created_at: `${CurrentDate().currentYear}-${
          CurrentDate().currentMonth + 1
        }-${CurrentDate().currentDay}`,
        updated_at: `${CurrentDate().currentYear}-${
          CurrentDate().currentMonth + 1
        }-${CurrentDate().currentDay}`,
      };

      mutation.mutate(data);
    }
  };
  return (
    <>
      <div className={styles.comment_container}>
        <Inputs
          type={"text"}
          style={styles.name_input}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>

        <Button
          type={"submit"}
          content={"Comment"}
          style={styles.comment_btn}
          onClick={handleSubmit}
          disabled={errStatus}
        />
      </div>
    </>
  );
};

export default Comment;

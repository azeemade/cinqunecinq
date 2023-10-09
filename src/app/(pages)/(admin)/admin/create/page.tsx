"use client";
import styles from "./_create.module.css";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "../../../../../services/firebaseService";

import { Button, Inputs } from "@/app/components";
import { slugify } from "@/utils/helpers/slugify";
import "@wangeditor/editor/dist/css/style.css";

import React, { useState, useEffect, ChangeEvent, FC } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import Image from "next/image";
import Alert from "@/app/components/Alert/Alert";
import { useBoundStore } from "@/app/store";

const Page = () => {
  const [editor, setEditor] = useState<IDomEditor | null>(null);
  const [title, setTitle] = useState("");
  // const [alert, setAlert] = useState(false);
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  const alert = useBoundStore((state) => state.alert);
  const setAlert = useBoundStore((state) => state.setAlert);

  const ref = collection(firestore, "articles");
  const mutation = useFirestoreCollectionMutation(ref);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (editor?.isEmpty && title === "") {
      setError("One or more field missing");
      setAlert(true);
    } else {
      console.log(title, `"${content}"`);

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();

      let data: any = {
        title: title,
        slug: slugify(title),
        author_id: 1,
        id: Math.floor(Math.random() * 1000000),
        content: `"${content}"`,
        created_at: `${currentYear}-${currentMonth + 1}-${currentDay}`,
        updated_at: `${currentYear}-${currentMonth + 1}-${currentDay}`,
      };

      mutation.mutate(data);
    }
  };

  const toolbarConfig: Partial<IToolbarConfig> = {};
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "Write here",
  };

  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div className={styles.form_container}>
        {alert && <Alert message={error} />}
        <form onSubmit={onSubmit}>
          <div className={styles.create_header}>
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
            <Button
              type={"submit"}
              content="Publish"
              style={styles.publish_button}
            />
          </div>
          <Inputs
            type="text"
            id="article_title"
            placeholder="Title"
            value={title}
            style={styles.article_title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            disabled={mutation.isLoading}
          />
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            className={styles.toolbar}
          />
          <Editor
            defaultConfig={editorConfig}
            value={content}
            onCreated={setEditor}
            onChange={(editor) => setContent(editor.getHtml())}
            mode="default"
            className={styles.editor}
          />
        </form>
      </div>
    </>
  );
};
export default Page;

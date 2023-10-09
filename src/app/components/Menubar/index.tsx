import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import styles from "./menubar.module.css";
import { Button } from "..";
import Image from "next/image";
export const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className={styles.menubar_container}>
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
        <div className={styles.menubar_items}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={
              (editor.isActive("bold") ? styles.is_active + " " : "") +
              styles.button
            }
            title="Bold"
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={
              (editor.isActive("italic") ? styles.is_active + " " : "") +
              styles.button
            }
            title="Italics"
          >
            I
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={
              (editor.isActive("strike") ? styles.is_active + " " : "") +
              styles.button
            }
            title="Strikethrough"
          >
            S̶
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={
              (editor.isActive("paragraph") ? styles.is_active + " " : "") +
              styles.button
            }
            title="Paragraph"
          >
            P
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              (editor.isActive("heading", { level: 1 })
                ? styles.is_active + " "
                : "") + styles.button
            }
            title="Heading 1"
          >
            h1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              (editor.isActive("heading", { level: 2 })
                ? styles.is_active + " "
                : "") + styles.button
            }
            title="Heading 2"
          >
            h2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              (editor.isActive("heading", { level: 3 })
                ? styles.is_active + " "
                : "") + styles.button
            }
            title="Heading 3"
          >
            h3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              (editor.isActive("heading", { level: 4 })
                ? styles.is_active + " "
                : "") + styles.button
            }
            title="Heading 4"
          >
            h4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              (editor.isActive("heading", { level: 5 })
                ? styles.is_active + " "
                : "") + styles.button
            }
            title="Heading 5"
          >
            h5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              (editor.isActive("heading", { level: 6 })
                ? styles.is_active + " "
                : "") + styles.button
            }
            title="Heading 6"
          >
            h6
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              (editor.isActive("bulletList") ? styles.is_active + " " : "") +
              styles.button
            }
            title="Bullet list"
          >
            <i className="ri-list-check"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              (editor.isActive("orderedList") ? styles.is_active + " " : "") +
              styles.button
            }
            title="Ordered list"
          >
            <i className="ri-list-ordered"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              (editor.isActive("blockquote") ? styles.is_active + " " : "") +
              styles.button
            }
            title="Blockquote"
          >
            <i className="ri-double-quotes-l"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Horizontal rule"
          >
            Hr
          </button>
          <button
            onClick={() => editor.chain().focus().setHardBreak().run()}
            title="Hard break"
          >
            Hb
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            title="undo"
          >
            <i className="ri-arrow-go-back-fill"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            title="redo"
          >
            <i className="ri-arrow-go-forward-fill"></i>
          </button>
        </div>
        <div>
          <Button
            type={"submit"}
            content="Publish"
            style={styles.publish_button}
          />
        </div>
      </div>
    </>
  );
};

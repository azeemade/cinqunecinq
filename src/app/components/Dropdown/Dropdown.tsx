import styles from "./dropdown.module.css";

interface DropdownInterface {
  isOpen: boolean;
  content: any;
  id?: string;
  style?: string;
}

const Dropdown = ({ isOpen, content, id, style }: DropdownInterface) => {
  return (
    <div id={id} className={styles.dropdown_container + " " + style}>
      {isOpen && (
        <div className={styles.dropdown_inner}>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

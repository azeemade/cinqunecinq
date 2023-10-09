import styles from "./dropdown.module.css";

interface DropdownInterface {
  isOpen: boolean;
  content: any;
}

const Dropdown = ({ isOpen, content }: DropdownInterface) => {
  return (
    <div className={styles.dropdown_container}>
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

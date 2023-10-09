interface DropdownInterface {
  isOpen: boolean;
  content: any;
}

function Dropdown({ isOpen, content }: DropdownInterface) {
  return (
    <div className="relative inline-block text-left">
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
}

export default Dropdown;

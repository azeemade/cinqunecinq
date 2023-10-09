import { ChangeEvent, MouseEvent } from "react";
import { useBoundStore } from "../../store";
import { Button, Inputs } from "..";
import styles from "./search.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const index = () => {
  const router = useRouter();
  const currentRoute = usePathname();
  const queryParams = useSearchParams();

  const search = useBoundStore((state) => state.search);
  const setSearch = useBoundStore((state) => state.setSearch);

  const search_value: string = queryParams.get("query") ?? "";
  const shouldRenderSearchBar = !["/create", "/edit/[id]"].includes(
    currentRoute
  );

  const handleSearch = (val: string) => {
    setSearch(val);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    router.push("/search?query=" + search);
  };

  return (
    <div>
      {!shouldRenderSearchBar && (
        <div className={styles.search_container}>
          <Inputs
            type="text"
            id="search"
            style={styles.search_input}
            placeholder="Search..."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleSearch(e.target.value)
            }
            value={search_value}
          />
          <Button
            type={"button"}
            content={<i className="ri-search-2-line"></i>}
            style={styles.search_button}
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

export default index;

"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import { Pacifico } from "next/font/google";
import { CurrentView } from "@/utils/helpers/current-view";
import Link from "next/link";
import Image from "next/image";
import { Button, Search, Dropdown } from "..";

const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["cyrillic"],
});

const Navbar = () => {
  const [dropdownState, setDropdownState] = useState(false);
  return (
    <div className={styles.navbar_container}>
      <div>
        <Link href="/" className={styles.brand_link}>
          <Image
            src="/images/logo/515logo.png"
            width={44}
            height={44}
            alt="cinqunecinq logo"
          />
          <span className={pacifico.className + " " + styles.brand_text}>
            cinqunecinq
          </span>
        </Link>
      </div>
      <div className={styles.navbar_right}>
        <div>
          <div className="hidden sm:block">
            <Search />
          </div>
          <div className="block sm:hidden">
            <Link href="/search">
              <i className="ri-search-2-line"></i>
            </Link>
          </div>
        </div>
        <div>
          <Button
            type={"button"}
            style=""
            onClick={() => setDropdownState(!dropdownState)}
            content={
              <Image
                src={
                  "https://ui-avatars.com/api/?name=" +
                  CurrentView() +
                  "&background=random&rounded=true"
                }
                alt={
                  "navigate to " +
                  (CurrentView() == "admin" ? "guest" : "admin") +
                  " view"
                }
                title={
                  "navigate to " +
                  (CurrentView() == "admin" ? "guest" : "admin") +
                  " view"
                }
                width={32}
                height={32}
              />
            }
          />
          <Dropdown
            isOpen={dropdownState}
            content={
              <Link
                href={CurrentView() == "admin" ? "/" : "/admin"}
                className={styles.menu_item}
              >
                {"Go to " + (CurrentView() == "admin" ? "guest" : "admin")}
              </Link>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

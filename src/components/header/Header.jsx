import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const links = [
  {
    id: 1,
    title: "소개",
    url: "/intro",
  },
  {
    id: 2,
    title: "과학자",
    url: "/port",
  },
  {
    id: 3,
    title: "유튜브",
    url: "/youtube",
  },
  {
    id: 4,
    title: "이미지",
    url: "/unsplash",
  },
  {
    id: 5,
    title: "영화",
    url: "/movie",
  },
];

const Header = () => {
  return (
    <header
      id="header"
      className="header__wrap jamsil9 bg-blue"
      role="heading"
      aria-level="1"
    >
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>
          <Link href="/">
            jung <em>site</em>
          </Link>
        </div>
        <nav className={styles.header__nav} role="navigation">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

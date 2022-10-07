import React from "react";
import Link from "next/link";

const SUbli = ({ pages, navToggele, page }) => {
  return (
    <ul className={`sub-menu  ${page && navToggele} `}>
      {pages.map((menu) => {
        return (
          <li key={menu.id}>
            <Link href="#">
              <a href="#">{menu.text}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SUbli;

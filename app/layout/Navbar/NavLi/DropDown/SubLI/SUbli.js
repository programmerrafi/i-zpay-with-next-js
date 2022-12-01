import React from "react";
import Link from "next/link";

const SUbli = ({ pages, navToggele, page }) => {
  return (
    <ul className={`sub-menu lg:bg-bgMain ${page && navToggele} `}>
      {pages.map((menu) => {
        return (
          <li key={menu.id} className="p-3">
            <Link href="#">
              <a href="#" className="font-normal">
                {menu.text}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SUbli;

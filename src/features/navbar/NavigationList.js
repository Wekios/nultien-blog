import React from "react";
import cn from "classnames";
import "./NavigationList.css";

import { Anchor } from "../../components/Anchor";

const NavLinks = [
  {
    name: "Link1",
    href: "#",
  },
  {
    name: "Link2",
    href: "#",
  },
  {
    name: "Link3",
    href: "#",
  },
  {
    name: "Link4",
    href: "#",
  },
  {
    name: "My Profile",
    href: "#",
  },
  {
    name: "Logout",
    href: "#",
  },
];

export function NavigationList({ className, type, menuOpen }) {
  className = cn({
    "hidden md:flex text-white": type === "desktop",
    "mobile-nav md:hidden text-white absolute bg-gradient-to-r from-black to-indigo-600":
      type === "mobile",
    "mobile-nav-active": type === "mobile" && menuOpen,
  });

  const itemClassName = cn({
    "text-center mb-2": type === "mobile",
  });

  return (
    <ul className={className}>
      {NavLinks.map(({ name, href }) => (
        <li key={name} className={itemClassName}>
          <Anchor href={href}>{name}</Anchor>
        </li>
      ))}
    </ul>
  );
}

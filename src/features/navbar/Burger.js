import React from "react";
import "./Burger.css";
import cn from "classnames";

export function Burger({ className, menuOpen, onOpen }) {
  className = cn(
    "cursor-pointer inline-block",
    {
      "is-active": menuOpen,
    },
    className
  );

  return (
    <button onClick={onOpen} className={className} aria-label="Open the menu">
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </button>
  );
}

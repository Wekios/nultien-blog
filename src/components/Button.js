import React from "react";
import cn from "classnames";

export function Button({ className, onClick, children, theme, type = "button", ...rest }) {
  className = cn(
    "px-4 py-2",
    { "text-white bg-purple-900": theme === "primary" },
    { "text-white bg-red-700": theme === "danger" },
    { "text-black bg-white border border-gray-400": theme === "ghost" },
    className
  );

  return <button {...{ onClick, className, type, ...rest }}>{children}</button>;
}

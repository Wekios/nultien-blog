import React from "react";
import cn from "classnames";

export function SearchInput({ className, ...rest }) {
  className = cn("bg-white h-8 px-3 md:px-5 text-sm focus:outline-none", className);

  return (
    <label>
      <span className="sr-only">Search</span>
      <input className={className} type="search" name="search" placeholder="Search" {...rest} />
    </label>
  );
}

import React from "react";
import cn from "classnames";

export function Anchor({ className, children, ...rest }) {
  className = cn("text-white underline px-1 mx-1", className);
  return (
    <a className={className} {...rest}>
      {children}
    </a>
  );
}

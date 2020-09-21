import React from "react";
import cn from "classnames";

export function Anchor({ className, children, href = "#", ...rest }) {
  className = cn("underline px-1 mx-1", className);
  return <a {...{ href, className, ...rest }}>{children}</a>;
}

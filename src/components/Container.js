import React from "react";
import cn from "classnames";

export function Container({ className, as: Tag = "div", children }) {
  className = cn("max-w-container mx-auto px-4", className);
  return <Tag className={className}>{children}</Tag>;
}

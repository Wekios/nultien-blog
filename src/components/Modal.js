import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

export function Modal({ className, children }) {
  const elRef = useRef(null);

  className = cn("fixed inset-0 flex items-center justify-center bg-modal");

  if (!elRef.current) {
    const div = document.createElement("div");
    div.className = className ?? "";
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<>{children}</>, elRef.current);
}

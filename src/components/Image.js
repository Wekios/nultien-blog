import React from "react";

export function Image({ className, size = 100 }) {
  return (
    <img className={className} src={`https://via.placeholder.com/${size}`} alt="blog content" />
  );
}

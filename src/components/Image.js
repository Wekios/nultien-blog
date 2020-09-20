import React from "react";

export function Image({ className, size = 100 }) {
  return <img className={className} src={`https://picsum.photos/${size}`} alt="blog content" />;
}

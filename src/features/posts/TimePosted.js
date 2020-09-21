import React from "react";

export function TimePosted({ time }) {
  time = `${new Date(time).toLocaleString()}`;

  return <small title={time}>Posted date: {time} by: Some person</small>;
}

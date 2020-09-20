import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button";
import { removeAll } from "./notificationsSlice";

export function NotificationsList({ className }) {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  if (!notifications.length) return null;

  return (
    <article className={className}>
      <header className="flex justify-between items-center">
        <h4 className="text-xl">Your notifications:</h4>
        <Button onClick={() => dispatch(removeAll())}>X</Button>
      </header>
      <ul>
        {notifications.map(({ id, text }) => (
          <li key={id}>
            <h3 className="font-bold">{text}</h3>
          </li>
        ))}
      </ul>
    </article>
  );
}

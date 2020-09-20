import React from "react";
import { useSelector } from "react-redux";

import { selectAllCategories } from "./categoriesSlice";
import { Anchor } from "../../components/Anchor";

export function Categories({ className }) {
  const categories = useSelector(selectAllCategories);

  return (
    <aside className={className}>
      <h2 className="text-xl">Categories:</h2>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Anchor className="text-black" href="#">
              {name}
            </Anchor>
          </li>
        ))}
      </ul>
    </aside>
  );
}

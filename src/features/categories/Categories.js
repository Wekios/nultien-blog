import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAllCategories } from "./categoriesSlice";
import { getPostByCategory, fetchPosts } from "../posts/postsSlice";
import { Anchor } from "../../components/Anchor";

export function Categories({ className }) {
  const categories = useSelector(selectAllCategories);

  const dispatch = useDispatch();

  const handleCategory = (id) => {
    dispatch(getPostByCategory(id));
  };

  const handleResetBlogs = () => {
    dispatch(fetchPosts());
  };

  return (
    <aside className={className}>
      <h2 className="text-xl">Categories:</h2>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Anchor onClick={handleCategory.bind(null, id)} className="text-black">
              {name}
            </Anchor>
          </li>
        ))}
        <li>
          <Anchor onClick={handleResetBlogs} className="text-black">
            Get all posts
          </Anchor>
        </li>
      </ul>
    </aside>
  );
}

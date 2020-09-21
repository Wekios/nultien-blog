import React from "react";
import { useDispatch } from "react-redux";

import { searchForPost } from "../posts/postsSlice";
import { SearchInput } from "../../components/SearchInput";

export function Search({ className }) {
  const dispatch = useDispatch();

  // TODO: Debounce this call if needed
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(searchForPost(value));
  };

  return <SearchInput onChange={handleSearch} className={className} />;
}

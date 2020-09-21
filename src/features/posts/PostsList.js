import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAllPosts, fetchPosts } from "./postsSlice";
import { Post } from "./Post";
import { Spinner } from "../../components/Spinner";

export function PostsList({ className }) {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  console.log(posts);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <Spinner className="mx-auto mt-8" />;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts.slice().sort((a, b) => b.createdAt.localeCompare(a.date));
    content = orderedPosts.map((post) => <Post key={post.id} {...post} />);
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <main className={className}>{content}</main>;
}

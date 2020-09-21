import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button } from "../../components/Button";

export const PostForm = ({
  heading,
  title: initialTitle = "",
  text: initialContent = "",
  categoryId: initialCategoryId = "",
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [text, setText] = useState(initialContent);
  const [categoryId, setCategoryId] = useState(initialCategoryId);

  const categories = useSelector((state) => state.categories);

  const categoryOptions = categories.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setText(e.target.value);
  const onCategoryChanged = (e) => setCategoryId(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, text, categoryId });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full sm:w-1/2 lg:w-1/3 mx-4 border border-black"
    >
      <header className="bg-indigo-800 text-white px-2">
        <h3>{heading}</h3>
      </header>
      <div className="flex p-2">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          className="w-full ml-3 px-2 border border-black"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          required
        />
      </div>
      <div className="flex p-2 ">
        <label htmlFor="postContent">Content:</label>
        <textarea
          className="w-full ml-3 px-2 border border-black"
          id="postContent"
          name="postContent"
          value={text}
          onChange={onContentChanged}
          required
        />
      </div>
      <div className="flex p-2 ">
        <label htmlFor="postCategory">Choose post category:</label>
        <select
          className="ml-3 border border-black"
          name="postCategory"
          id="postCategory"
          value={categoryId}
          onChange={onCategoryChanged}
          onBlur={onCategoryChanged}
          required
        >
          <option value=""></option>
          {categoryOptions}
        </select>
      </div>
      <div className="flex justify-around py-2">
        <Button type="submit">Save Post</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  );
};

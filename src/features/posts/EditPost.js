import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editPost, selectPostById } from "./postsSlice";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { PostForm } from "./PostForm";

export function EditPost({ postId, className }) {
  const [showModal, setShowModal] = useState(false);

  const post = useSelector((state) => selectPostById(state, postId));

  const dispatch = useDispatch();

  const handlePostEdit = (fields) => {
    dispatch(editPost({ id: postId, ...fields }));
    setShowModal(false);
  };

  return (
    <>
      <Button className={className} onClick={() => setShowModal(true)} theme="primary">
        Edit Post
      </Button>
      {showModal && (
        <Modal className="fixed inset-0 flex items-center justify-center">
          <PostForm
            onSubmit={handlePostEdit}
            {...post}
            onCancel={() => setShowModal(false)}
            heading="Edit Post"
          />
        </Modal>
      )}
    </>
  );
}

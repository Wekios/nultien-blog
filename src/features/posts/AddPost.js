import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewPost } from "./postsSlice";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { PostForm } from "./PostForm";

import { addNew } from "../notifications/notificationsSlice";

export function AddPost({ className }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handlePostAddition = async (fields) => {
    try {
      dispatch(addNewPost({ ...fields }));
      dispatch(addNew(fields.title));
    } catch (err) {
      // TODO: requires proper error handling
      console.error("Failed to save the post: ", err);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <Button className={className} onClick={() => setShowModal(true)} theme="primary">
        Add Post
      </Button>
      {showModal && (
        <Modal className="fixed inset-0 flex items-center justify-center">
          <PostForm
            heading="Add a New Post"
            onSubmit={handlePostAddition}
            onCancel={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

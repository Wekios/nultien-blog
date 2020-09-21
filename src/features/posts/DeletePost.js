import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removePost } from "./postsSlice";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

export function DeletePost({ postId, className }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handlePostDeletion = async () => {
    try {
      dispatch(removePost({ id: postId }));
    } catch (err) {
      // Todo: Add proper error handling
      console.error("Failed to delete the post: ", err);
    }
  };
  return (
    <>
      <Button className={className} onClick={() => setShowModal(true)} theme="danger">
        Delete Post
      </Button>
      {showModal && (
        <Modal>
          <div className="bg-white w-full md:w-1/2 lg:w-1/4 mx-4 border border-black p-5">
            <h3 className="text-center pb-4">Are you sure? This action can't be reverted</h3>
            <div className="flex">
              <Button className="block mx-auto my-2" theme="danger" onClick={handlePostDeletion}>
                Yes, I'm sure
              </Button>
              <Button
                className="block mx-auto my-2"
                theme="ghost"
                onClick={() => setShowModal(false)}
              >
                cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

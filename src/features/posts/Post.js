import React from "react";

import { Image } from "../../components/Image";
import { TimePosted } from "./TimePosted";
import { EditPost } from "./EditPost";
import { DeletePost } from "./DeletePost";

export function Post({ id, title, createdAt, text }) {
  return (
    <article className="px-4 py-2 mb-4 bg-white border border-gray-400 shadow-lg">
      <section className="flex flex-col sm:flex-row items-center">
        <div className="w-20 mr-2">
          <Image size={80} />
        </div>
        <div className="mb-2">
          <h3>{title}</h3>
          <TimePosted time={createdAt} />
        </div>
        <div className="sm:ml-auto sm:text-right">
          <EditPost className="mx-1 mb-2" postId={id} />
          <DeletePost className="mx-1 mb-2" postId={id} />
        </div>
      </section>
      <p>{text}</p>
      <section className="flex flex-wrap justify-center">
        <Image className="m-1" />
        <Image className="m-1" />
        <Image className="m-1" />
      </section>
    </article>
  );
}

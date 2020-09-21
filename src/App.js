import React from "react";

import { Navbar } from "./features/navbar/Navbar";
import { NotificationsList } from "./features/notifications/NotificationsList";
import { Categories } from "./features/categories/Categories";
import { AddPost } from "./features/posts/AddPost";
import { PostsList } from "./features/posts/PostsList";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <Container className="py-4">
        <div className="md:w-3/4 md:pl-4 md:ml-auto">
          <NotificationsList />
          <AddPost className="block ml-auto" />
        </div>
      </Container>
      <Container className="flex flex-wrap">
        <Categories className="w-full md:w-1/4 md:mr-4 bg-white pt-2 px-3" />
        <PostsList className="flex-1" />
      </Container>
    </div>
  );
}

export default App;

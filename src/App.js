import React from "react";

import { Navbar } from "./features/navbar/Navbar";
import { NotificationsList } from "./features/notifications/NotificationsList";
import { Categories } from "./features/categories/Categories";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <Container className="py-4">
        <div className="md:w-3/4 md:pl-4 md:ml-auto">
          <NotificationsList />
          <div>Add post</div>
        </div>
      </Container>
      <Container className="flex">
        <Categories className="md:w-1/4 md:mr-4 bg-white pt-2 px-3" />
        <div>posts</div>
      </Container>
    </div>
  );
}

export default App;

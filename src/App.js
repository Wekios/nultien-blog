import React from "react";

import { Navbar } from "./features/navbar/Navbar";
import { NotificationsList } from "./features/notifications/NotificationsList";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <Container className="py-4">
        <div className="md:w-3/4 md:pl-4 md:ml-auto">
          <NotificationsList />
        </div>
      </Container>
    </div>
  );
}

export default App;

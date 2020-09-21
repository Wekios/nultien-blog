import React, { useState } from "react";

import { Burger } from "./Burger";
import { NavigationList } from "./NavigationList";
import { Container } from "../../components/Container";
import { Search } from "../../features/search/Search";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-black to-indigo-600">
      <Container className="flex items-center justify-between py-4">
        <h1 className="text-white">My Blog</h1>
        <nav className="flex items-center">
          <Search className="mr-4" />

          {/* Desktop */}
          <NavigationList type="desktop" />

          {/* Mobile */}
          <Burger className="md:hidden" menuOpen={isOpen} onOpen={handleMenuOpen} />
          <NavigationList type="mobile" menuOpen={isOpen} />
        </nav>
      </Container>
    </header>
  );
}

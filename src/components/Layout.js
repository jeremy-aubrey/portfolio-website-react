import React from "react";

import NavbarMenu from "./NavbarMenu";
import Container from "react-bootstrap/Container";

const Layout = (props) => {
  return (
    <Container>
      <header>
        <NavbarMenu />
      </header>
      <main>
        <Container className="mt-3">{props.children}</Container>
      </main>
    </Container>
  );
};

export default Layout;

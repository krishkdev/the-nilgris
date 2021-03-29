import React, { useState } from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import { StyledNavHeader } from "./NavHeader.styled";
const NavHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledNavHeader>
      <h2>Thenilgris</h2>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </StyledNavHeader>
  );
};

export default NavHeader;

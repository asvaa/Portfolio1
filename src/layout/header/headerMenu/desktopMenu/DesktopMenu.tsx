import React, { FC } from "react";
import styled from "styled-components";
import { Menu } from "../menu/Menu";

export const DesktopMenu: FC = () => {
  return (
    <StyledDesktopMenu>
      <Menu />
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

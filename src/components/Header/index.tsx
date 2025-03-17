import React from "react";
import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/logo.png";
import Timer from "../../assets/time.png";
import List from "../../assets/list.png";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="Logo" />
      </span>
      <nav>
        <a href="">
          <img src={Timer} alt="Timer" />
        </a>
        <a href="">
          <img src={List} alt="History" />
        </a>
      </nav>
    </HeaderContainer>
  );
}

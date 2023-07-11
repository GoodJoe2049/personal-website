import { Navbar, Nav } from 'rsuite';
import React from "react";
import 'rsuite/dist/rsuite.min.css';
import styled from "@emotion/styled";
import Button from 'rsuite/Button';
import Toggle from 'rsuite/Toggle';
import { backgroundColor, buttonColor, navBarBackgroundColor } from './ThemeFunctions';

const NavFormat = styled.div`
  background-color: black;
`;

interface NavigationProps{
  theme: boolean;
  setTheme(theme: boolean): () => void;
};

const Navigation = ({theme, setTheme}: NavigationProps) => {
  console.log(theme)
  return (
    <Navbar appearance='inverse' style={{
      backgroundColor: navBarBackgroundColor(theme),
      transition: "all .25s ease-in-out",
      fontFamily: "Helvetica"
      }}>
        <Nav appearance='tabs'>
          <Nav.Item>About Me</Nav.Item>
          <Nav.Item>Experience</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Toggle style={{
            alignItems: "center",
            margin: "10px",
            paddingTop: "20px",
            width: "50px",
            transition: "all .25s ease-in-out",
            }}
            onClick={()=>setTheme(!theme)}
            unCheckedChildren={"🔆"}
            checkedChildren={"🌙"}
          >
          </Toggle>
          <Nav.Item>Contact Me</Nav.Item>
        </Nav>
    </Navbar>
  );
};

export default Navigation;

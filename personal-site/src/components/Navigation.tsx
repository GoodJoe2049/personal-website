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
    <React.Fragment>
        <Navbar appearance='inverse' style={{
          backgroundColor: navBarBackgroundColor(theme),
          transition: "all .25s ease-in-out",
          fontFamily: "Helvetica"
          }}>
          <Nav appearance="default">
            <Nav.Item>About Me</Nav.Item>
            <Nav.Item>Experience</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item>Contact Me</Nav.Item>
            <Button onClick={()=>setTheme(!theme)} style={{
              transition: "all .25s ease-in-out",
              margin: "10px",
              fontSize: "20px"
            }}>
              {theme ? "🌙" : "🔆"}
            </Button>
          </Nav>
        </Navbar>
    </React.Fragment>
  );
};

export default Navigation;

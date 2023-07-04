import { buttonColor } from "../ThemeFunctions";
import React from "react";
import styled from "@emotion/styled";

const TextFormat = styled.div`
  font-size: 20px;
  font-family: Calibri;
  font-weight: bold;
  color: white;
`;

interface ButtonProps{
  children: string;
  theme?: boolean;
  onClick?(): any;
  //more to be added
};

const Button = ({children, theme, onClick}: ButtonProps) => (
    <button onClick={onClick} style={{
      backgroundColor: buttonColor(theme),
      border: "none",
      padding: "6px",
      borderRadius: "10%",
      boxShadow: "1px 1px 2px rgba(21, 21, 21, 0.2)",
      cursor: "pointer",
      transition: "all .25s ease-in-out"
    }}>
      <TextFormat>
        {children}
      </TextFormat>
    </button>
);

export default Button;

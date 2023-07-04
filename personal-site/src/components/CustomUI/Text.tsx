import { generalTextColor } from "../ThemeFunctions";
import React from "react";
import styled from "@emotion/styled";

const TextFormat = styled.div<{textColor: string}>`
  font-size: 18px;
  font-family: Calibri;
  transition: all .25s ease-in-out;
  color: ${props => props.textColor};
`;

//probably will generate separate CSS theme file 
//https://reactnavigation.org/docs/use-theme/

interface TextProps{
  children: string;
  theme?: boolean;
};

const Text = ({children, theme}: TextProps) => (
  <TextFormat textColor={generalTextColor(theme)}>
    {children}
  </TextFormat>
);

export default Text;

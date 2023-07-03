import React from "react";
import styled from "@emotion/styled";

const TextFormat = styled.div`
  font-size: 18px;
  font-family: Calibri;
`;

interface TextProps{
  children: string;
};

const Text = ({children}: TextProps) => (
  <TextFormat>{children}</TextFormat>
);

export default Text;

import React, {useState} from "react";
import './App.css';
import styled from "@emotion/styled";
import { backgroundColor } from "./components/ThemeFunctions";

import Text from './components/CustomUI/Text.tsx';
import Button from "./components/CustomUI/Button.tsx";

//fix this color prop
const Background = styled.div`
  background-color: black;
`;

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <React.Fragment>
      <Background>
        <Text theme={theme}>Testing the Text tag</Text>
        <Button theme={theme} onClick={()=>setTheme(!theme)}>
          toggle
        </Button>
      </Background>
    </React.Fragment>
  );
}

export default App;

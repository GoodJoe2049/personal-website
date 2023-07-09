import React, {useState} from "react";
import './App.css';
import { backgroundColor } from "./components/ThemeFunctions";

import Text from './components/CustomUI/Text.tsx';
import Button from "./components/CustomUI/Button.tsx";

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <div style={
      {backgroundColor: backgroundColor(theme), transition: "all .25s ease-in-out"}}>
      <Text theme={theme}>Testing the Text tag</Text>
      <Button theme={theme} onClick={()=>setTheme(!theme)}>
        Toggle Theme
      </Button>
    </div>
  );
}

export default App;

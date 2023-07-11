import React, {useState} from "react";
import './App.css';
import { backgroundColor } from "./components/ThemeFunctions";
import Navigation from "./components/Navigation.tsx";

import Text from './components/CustomUI/Text.tsx';

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <div style={
      {backgroundColor: backgroundColor(theme), transition: "all .25s ease-in-out"}}>
      {/*<Text theme={theme}>Testing the Text tag</Text>
      <Button theme={theme} onClick={()=>setTheme(!theme)}>
        Toggle Theme
      </Button>*/}
    <Navigation theme={theme} setTheme={setTheme}/>
    <div style={{height: "1000px", margin: "30px"}}>
      <Text theme={theme}>Testing the Text tag</Text>
    </div>
    </div>
  );
}

export default App;

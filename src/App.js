import { useState } from "react";
import "../src/styles/App.css";
import LoginContainer from "./modules/Login/Container/LoginContainer";
import UplaodingDocContainer from "./modules/UploadingDoc/Container/UplaodingDocContainer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? (
    <UplaodingDocContainer
      setIsLoggedIn={setIsLoggedIn}
    ></UplaodingDocContainer>
  ) : (
    <LoginContainer setIsLoggedIn={setIsLoggedIn}></LoginContainer>
  );
}

export default App;

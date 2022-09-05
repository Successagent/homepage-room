import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

import { useState } from "react";

function App() {
  const [visibility, setVisibility] = useState(0);
  const [menu, setMenu] = useState(false);

  const getInnerHeight = (e) => {
    let parent = e.target.parentElement.parentElement;
    console.log(window.innerHeight);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const forwardImage = () => {
    if (visibility === 0) {
      setVisibility(1);
    } else if (visibility === 1) {
      setVisibility(2);
    } else if (visibility === 2) {
      setVisibility(0);
      console.log(visibility);
    }
  };
  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        menu={menu}
        getInnerHeight={getInnerHeight}
      />
      <Main forwardImage={forwardImage} visibility={visibility} />
      <Footer />
    </>
  );
}

export default App;

import * as SC from "./AppStyled";
import About from "./components/About/About";

import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import Intro from "./components/Intro/Intro";
import Logo from "./components/Logo/Logo";
import Trending from "./components/Trending/Trending";
import Header from "./layout/Header/Header";
import SharedLayout from "./layout/SharedLayout/SharedLayout";

function App() {
  return (
    <SC.AppStyled>
      <Header>
        <Logo />
        <BurgerBtn />
      </Header>
      <SharedLayout>
        <Intro/>
        <Trending/>
        <About/>
      </SharedLayout>
    </SC.AppStyled>
  );
}

export default App;

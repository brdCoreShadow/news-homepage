import * as SC from "./AppStyled";
import About from "./components/About/About";

import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import BurgerList from "./components/BurgerMenu/BurgerList";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import BurgerPortal from "./components/BurgerPortal/BurgerPortal";
import Intro from "./components/Intro/Intro";
import Logo from "./components/Logo/Logo";
import Trending from "./components/Trending/Trending";
import { useScreenSize } from "./hooks/useScreenSize";
import { useToggle } from "./hooks/useToggle";
import Header from "./layout/Header/Header";
import SharedLayout from "./layout/SharedLayout/SharedLayout";

function App() {
  const { openShare, closeShare, isShare } = useToggle();
  const { isDesktop } = useScreenSize();

  return (
    <SC.AppStyled>
      <BurgerPortal>
        {isShare && <BurgerMenu isShare={isShare} closeShare={closeShare} />}
      </BurgerPortal>
      <Header>
        <Logo />
        {isDesktop ? <BurgerList /> : <BurgerBtn openShare={openShare} />}
      </Header>
      <SharedLayout>
        <SC.DeskFlexCon>
        <Intro />
        <Trending />
        </SC.DeskFlexCon>
        <About />
      </SharedLayout>
    </SC.AppStyled>
  );
}

export default App;

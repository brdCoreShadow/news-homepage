import * as SC from "./AppStyled";

import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import Logo from "./components/Logo/Logo";
import Header from "./layout/Header/Header";

function App() {
  return (
    <SC.AppStyled>
      <Header>
        <Logo />
        <BurgerBtn />
      </Header>
    </SC.AppStyled>
  );
}

export default App;

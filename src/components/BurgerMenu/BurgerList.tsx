import * as SC from "./BurgerMenuStyled"

const BurgerList: React.FC = () => {
  return (
    <SC.BurgerList>
      <SC.BurgerItem>
        <a href="#">Home</a>
      </SC.BurgerItem>
      <SC.BurgerItem>
        <a href="#">New</a>
      </SC.BurgerItem>
      <SC.BurgerItem>
        <a href="#">Popular</a>
      </SC.BurgerItem>
      <SC.BurgerItem>
        <a href="#">Trending</a>
      </SC.BurgerItem>
      <SC.BurgerItem>
        <a href="#">Categories</a>
      </SC.BurgerItem>
    </SC.BurgerList>
  );
};

export default BurgerList;

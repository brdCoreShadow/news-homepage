import styled from "@emotion/styled";

export const BurgerWrapper = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  z-index: 3;

  text-align: right;

  background-color: rgba(0, 0, 26, 0.5);
`;

export const BurgerMenuCon = styled.div`
  display: inline-block;

  width: 68%;
  height: 100%;

  padding-top: 28px;
  padding-left: 24px;
  padding-right: 28px;

  background-color: #fffdfa;
`;

export const BurgerBtnCon = styled.div`
  margin-bottom: 86px;

  text-align: right;

  & > button {
    width: 30px;
    height: 30px;

    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2231%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%2300001A%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m2.919.297%2028.284%2028.284-2.122%202.122L.797%202.419z%22/%3E%3Cpath%20d%3D%22M.797%2028.581%2029.081.297l2.122%202.122L2.919%2030.703z%22/%3E%3C/g%3E%3C/svg%3E");
  }
`;

export const BurgerList = styled.ul`
  text-align: left;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BurgerItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 24px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
      margin-right: 40px;
    }
  }

  & > a {
    font-size: 18px;
    line-height: 1.3;

    color: #00001a;

    @media (min-width: 1280px) {
      font-size: 15px;
      line-height: 1.7;

      color: #5e607a;

      transition: color 0.3s;

      &:hover,
      &:focus,
      &:active {
        color: #f15d51;
        cursor: pointer;
        transition: color 0.3s;
      }
    }
  }
`;

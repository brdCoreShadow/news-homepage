import styled from "@emotion/styled";

export const IntroCon = styled.div`
  margin-bottom: 64px;

  @media (min-width: 1280px) {
    margin-bottom: 0;
    margin-right: 30px;
  }
`;

export const IntroPicThumb = styled.div`
  margin-bottom: 24px;

  @media (min-width: 1280px) {
    margin-bottom: 28px;
  }
`;

export const IntroContentCon = styled.div`
  & > h3 {
    margin-bottom: 16px;

    font-size: 40px;
    font-weight: 800;

    color: #00001a;

    @media (min-width: 1280px) {
      margin-bottom: 0;
      font-size: 56px;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const IntroFlexCon = styled.div`
  @media (min-width: 1280px) {
  }

  & > p {
    margin-bottom: 24px;

    font-size: 15px;
    line-height: 1.7;
    font-weight: 400;

    color: #5e607a;

    @media (min-width: 1280px) {
      margin-bottom: 28px;
    }
  }

  & > button {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 32px;
    padding-right: 32px;

    text-transform: uppercase;

    font-size: 14px;
    line-height: 1.7;
    left: 4.38px;
    font-weight: 700;

    background-color: #f15d51;
    color: #fffdfa;
    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
      background-color: #00001a;
      color: #fffdfa;

      cursor: pointer;

      transition: all 0.3s;
    }
  }
`;

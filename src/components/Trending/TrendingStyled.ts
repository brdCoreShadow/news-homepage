import styled from "@emotion/styled";

export const TrendingCon = styled.div`
  margin-bottom: 64px;

  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #00001a;

  @media (min-width: 1280px) {

    margin-bottom: 0;

    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }

  & > h3 {
    margin-bottom: 36px;

    font-size: 32px;
    font-weight: 700;

    color: #e9aa52;

    @media (min-width: 1280px) {
      margin-bottom: 34px;

      font-size: 40px;
    }
  }
`;

export const TrendingItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 32px;

    padding-bottom: 28px;

    border-bottom: 1px solid #5e607a;
  }

  & > h4 {
    margin-bottom: 8px;

    font-size: 20px;
    line-height: 1.2;

    color: #fffdfa;
  }

  & > p {
    font-size: 15px;
    line-height: 1.7;

    color: #c5c6ce;
  }
`;

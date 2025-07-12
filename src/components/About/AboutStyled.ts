import styled from "@emotion/styled";

export const AboutCon = styled.div``;

export const AboutList = styled.ul`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AboutItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 32px;

    @media (min-width: 1280px){
        margin-bottom: 0;

        margin-right: 30px;
    }
  }
`;

export const AboutItemPicThumb = styled.div`
  margin-right: 24px;

  & > img {
    min-width: 100px;
    min-height: 129px;


  }
`;

export const AboutItemContentCon = styled.div`
  & > h3 {
    margin-bottom: 12px;

    font-size: 32px;

    color: #c5c6ce;
    opacity: 0.7;
  }

  & > h4 {
    margin-bottom: 8px;

    font-size: 18px;
    line-height: 1.3;
    font-weight: 800;

    color: #00001a;
  }

  & > p {
    font-size: 15px;
    line-height: 1.7;

    color: #5e607a;

    opacity: 0.7;
  }
`;

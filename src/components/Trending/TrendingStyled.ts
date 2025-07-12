import styled from "@emotion/styled";

export const TrendingCon = styled.div`
padding-top: 24px;
padding-bottom: 24px;
padding-left: 20px;
padding-right: 20px;

background-color: #00001A;

& > h3{
    margin-bottom: 36px;

    font-size: 32px;
    font-weight: 700;

    color: #E9AA52;
}
`

export const TrendingItem = styled.li`

&:not(:last-of-type){
    margin-bottom: 32px;

    padding-bottom: 28px;

    border-bottom: 1px solid #5E607A;
}

& > h4{
    margin-bottom: 8px;

    font-size: 20px;
    line-height: 1.2;

    color: #FFFDFA;
}

& > p{
    font-size: 15px;
    line-height: 1.7;

    color: #C5C6CE;
}
`
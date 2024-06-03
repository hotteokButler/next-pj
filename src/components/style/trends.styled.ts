import styled from 'styled-components';

export const TrendLi = styled.div`
  width: 100%;
  padding: 15px 0px; 
  a {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const TrendSub = styled.span`
  display: block;
  font-size: 0.82rem;
  color: ${p => p.theme.colors?.darkgray};
`;

export const TrendTit = styled.h5`
  font-weight: 700;
  margin : 5px 0 4px;
`

export const TrendPostCnt = styled(TrendSub)`
  display: block;
`;

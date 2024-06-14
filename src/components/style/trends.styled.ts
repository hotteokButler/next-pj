import styled from 'styled-components';

export const TrendLi = styled.div`
  width: 100%;
  a {
    padding: 15px;
    display: flex;
    width: 100%;
    flex-direction: column;
    transition: 0.2s;
    &:hover {
      background : ${p => p.theme.colors?.border};
    }
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

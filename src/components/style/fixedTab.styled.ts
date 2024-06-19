import styled from 'styled-components';
import { SearchBackBtn } from './searchCon.styled';

export const FixedTabWrap = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${(p) => p.theme.colors?.border};
  background-color: #ffffffa6;
  backdrop-filter: blur(5px);
  z-index: 3;
  h4 {
    padding: 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;





export const TabBtns = styled.div<{$tab_cnt ?: number | string;}>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${p => p.$tab_cnt ? p.$tab_cnt : 2}, 1fr);
`;

export const TabBtn = styled.button<{ $tabState: boolean }>`
  position: relative;
  display: block;
  text-align: center;
  line-height: 45px;
  font-size: 0.95rem;
  cursor: pointer;

  &::after {
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    clear: both;
    content: '';
    width: 40px;
    height: 3px;
    background: ${(p) => (p.$tabState ? p.theme.colors?.pointColor : 'transparent')};
  }

  &:hover{
    background: ${p => p.theme.colors?.grayOp3};
  }
`;


export const FixedTabBackBtn = styled(SearchBackBtn)`
  margin: 10px;
`

export const FixedTabH4 = styled.h4`
  display: inline-block;
`
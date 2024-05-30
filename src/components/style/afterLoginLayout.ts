// (afterLogin)/layout.tsx

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100dvw;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;
export const ConLogo = styled.div`
  font-size: 1.85rem;
  a {
    width: 50px;
    height: 50px;
    margin: 5px;
    display: flex;
    text-align: center;
    font-size: inherit;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(p) => p.theme.colors?.white};
    &:hover {
      background: ${(p) => p.theme.colors?.border};
    }
  }
`;

export const LeftSideWrap = styled.aside`
  position: relative;
  width: 275px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const LeftSideMenu = styled.div`
  position: fixed;
  padding: 0 10px;
  width: 100%;
  max-width: 275px;
`;
export const TabMenu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  a {
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    margin: 4px 0;
    border-radius: 50px;
    height: 51px;
    &:hover {
      background: ${(p) => p.theme.colors?.border};
    }
  }
  span {
    display: inline-block;
  }
`;

export const LinkIcon = styled.span<{ $getNew?: boolean; $state?: boolean }>`
  position: relative;
  margin: 0 4px 0 0;
  svg {
    width: 35px;
    height: 35px;
    ${(p) => p.$state && 'stroke-width: 1 !important;'}
    rect {
      ${(p) => p.$state && 'stroke-width: 50 !important;'}
    }
  }

  /* new 하이라이트 처리 */
  &:after {
    content: '';
    clear: both;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #1d9bf0;
    position: absolute;
    right: 0px;
    top: 0px;
    opacity: ${(p) => (p.$getNew ? '1' : '0')};
    visibility: ${(p) => (p.$getNew ? 'visible' : 'hidden')};
  }
`;

export const LinkTxt = styled.span<{ $state?: boolean }>`
  font-size: 1.2rem;
  padding: 0 10px;
  font-weight: ${(p) => (p.$state ? '700' : '500')};
`;

export const ConWrap = styled.main`
  position: relative;
  width: 100%;
  max-width: 600px;
  border-left: 1px solid ${(p) => p.theme.colors?.border};
  border-right: 1px solid ${(p) => p.theme.colors?.border};
`;

export const RightSideWrap = styled.aside`
  position: relative;
  width: 350px;
`;

// (afterLogin)/layout.tsx

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100dvw;
  min-height: 100dvh;
`;

export const InnerWrapper = styled.div`
  position: inherit;
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

export const LeftSideWrap = styled.header`
  position: relative;
  width: 275px;
  height: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > div[aria-label='side_main_menu'] {
    position: fixed;
    width: 275px;
    padding: 10px;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
  @media ${({ theme }) => theme.mediaSize?.tablet} {
    width: 75px;
    & > div[aria-label='side_main_menu'] {
      width: 75px;
    }
  }
`;
export const LeftSideMenu = styled.div`
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

  @media ${({ theme }) => theme.mediaSize?.tablet} {
    a {
      padding: 10px;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      justify-content: center;
      margin: 0 auto;
    }
  }
`;

export const LinkIcon = styled.span<{ $getNew?: boolean; $state?: boolean }>`
  position: relative;
  display: inline-block;

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
  @media ${({ theme }) => theme.mediaSize?.tablet} {
    margin: 0;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const LinkTxt = styled.span<{ $state?: boolean }>`
  display: inline-block;
  font-size: 1.2rem;
  padding: 0 10px;
  font-weight: ${(p) => (p.$state ? '700' : '500')};

  @media ${({ theme }) => theme.mediaSize?.tablet} {
    display: none;
  }
`;

export const ComposePostBtn = styled.div`
  width: 90%;
  a {
    width: 100%;
    justify-content: center;
    color: ${(p) => p.theme.colors?.white};
    background: ${(p) => p.theme.colors?.pointColor};
  }

  & a:hover {
    background: ${(p) => p.theme.colors?.darkBlue};
  }
  svg {
    display: none;
    width: 35px;
    height: 35px;
    fill: ${(p) => p.theme.colors?.white};
  }
  @media ${({ theme }) => theme.mediaSize?.tablet} {
    margin: 0 auto;
    svg {
      display: block;
      width: 28px;
      height: 28px;
    }
    span {
      display: none;
    }
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 12px;
  margin: 4px 0;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: ${(p) => p.theme.colors?.border};
  }

  @media ${({ theme }) => theme.mediaSize?.tablet} {
    padding: 0;
    margin: 0 auto 15px;
    justify-content: center;
    span {
      display: none;
    }
    &:hover {
      background: none;
    }
  }
`;
export const LogoutBtnTxt = styled.span<{ $isId: boolean }>`
  display: block;
  margin: 0px 0px 2px 8px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: ${(p) => (p.$isId ? '500' : '700')};
  color: ${(p) => (p.$isId ? p.theme.colors?.darkgray : 'inherit')};
  svg {
    vertical-align: text-top;
  }

  @media ${({ theme }) => theme.mediaSize?.tablet} {
  }
`;

export const OuterWrap = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-grow: 1;
  max-width: 1050px;
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
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > div[aria-label='aside_content'] {
    width: 350px;
    margin: 60px 70px 0 0;
    padding: 10px;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media ${({ theme }) => theme.mediaSize?.tablet} {

  }

`;

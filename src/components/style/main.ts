import styled from 'styled-components';

export const MainWrapper = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  padding: 1rem;

  /* media Q */
  @media ${({ theme }) => theme.mediaSize?.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MainLogo = styled.div`
  width: 50%;
  font-size: 22rem;
  text-align: center;
  /* media Q */
  @media ${({ theme }) => theme.mediaSize?.tablet} {
    width: 100%;
    font-size: 3.3rem;
  }
  @media ${({ theme }) => theme.mediaSize?.mobile} {
    font-size: 10vw;
  }
`;

export const MainTitle = styled.h2`
  font-weight: bold;
  font-size: 4rem;
  padding: 3rem 0;

  @media ${({ theme }) => theme.mediaSize?.tablet} {
    font-size: 9.4vw;
    padding: 5% 0;
  }
`;

export const MainSubTitle = styled.p<{ $ftsize?: string; $smft?: string }>`
  font-weight: bold;
  font-size: ${(props) => props.$ftsize || '2rem'};
  padding: 1rem 0;
  @media ${({ theme }) => theme.mediaSize?.tablet} {
    font-size: ${(props) => props.$ftsize || '5.3vw'};
    padding: 4% 0;
  }
`;

export const MainContent = styled.div`
  width: 50%;
  width: 50%;
  padding: 1.5rem 1rem;
  /* media Q */
  @media ${({ theme }) => theme.mediaSize?.tablet} {
    width: 100%;
    padding: 5% 4%;
  }
  @media ${({ theme }) => theme.mediaSize?.mobile} {
    padding: 5% 0;
  }
`;

export const MainLis = styled.div<{ $mggap?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0;
  text-align: center;
  margin-bottom: ${(props) => props.$mggap || '0px'};
`;

interface IMainButton {
  $bordercolor?: string;
  $bgcolor?: string;
  $hbgcolor?: string;
  $fontcolor?: string;
  $hfontcolor?: string;
  $noneIcon?: boolean;
}

export const MainButton = styled.button<IMainButton>`
  cursor: pointer;
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  justify-content: ${(props) => (props.$noneIcon ? 'center' : 'flex-start')};
  border: 1px solid ${(props) => props.$bordercolor || '#eee'};
  border-radius: 15rem;
  padding: 0.65em 1.5em 0.5em;
  width: 50vw;
  height: 50px;
  max-width: 380px;
  background: ${(props) => props.$bgcolor || 'transparent'};
  color: ${(props) => props.$fontcolor || 'inherit'};
  font-weight: ${(props) => (props.$noneIcon ? 'bold' : 'inherit')};
  &:hover {
    color: ${(props) => props.$hfontcolor || 'inherit'};
    background: ${(props) => props.$hbgcolor || 'rgba(0,0,0,0.1)'};
  }
  & > span {
    font-size: 0.95rem;
  }
  span {
    display: inline-block;
  }

  /* media Q */
  @media ${({ theme }) => theme.mediaSize?.tablet} {
    width: 90vw;
  }
`;

export const MainButtonIcon = styled.span`
  margin: 0 8px 0 0;
  svg {
    font-size: 1.7rem;
  }
`;

export const MainSection = styled.div`
  position: relative;
  text-align: center;
  padding: 0.2rem 0;
  font-size: 13px;
  width: 50vw;
  max-width: 380px;
  & span {
    display: inline-block;
  }
  & span::after,
  & span::before {
    content: '';
    clear: both;
    position: absolute;
    display: block;
    width: 40%;
    height: 0.1px;
    background: #eee;
    top: 50%;
    transform: translateY(-50%);
  }
  & span::after {
    right: 3%;
  }
  & span::before {
    left: 3%;
  }

  @media ${({ theme }) => theme.mediaSize?.tablet} {
    width: 90vw;
  }
`;

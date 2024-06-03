import styled from 'styled-components';

export const FollowerRecommendLis = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;

  div[aria-label='profile_info'] {
    display: flex;
  }
  div[aria-label='profile_txt'] {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

export const FolloerTxt = styled.span<{ $isId: boolean }>`
  display: block;
  margin: 0px 0px 2px 8px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: ${(p) => (p.$isId ? '500' : '700')};
  color: ${(p) => (p.$isId ? p.theme.colors?.darkgray : 'inherit')};
  svg {
    vertical-align: text-top;
  }

  &:hover {
    text-decoration: ${(p) => (p.$isId ? 'none' : 'underline')};
    text-decoration-thickness: 2px;
  }
  @media ${({ theme }) => theme.mediaSize?.desktop} {
  }
`;

export const FollowBtn = styled.button`
  align-self: center;
  padding: 10px 15px;
  border-radius: 10rem;
  font-weight: 700;
  background: ${(p) => p.theme.colors?.white};
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors?.lightgray};
  }
`;

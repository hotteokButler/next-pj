import styled from 'styled-components';

export const ProfileImg = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  background: #eee;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }
  a {
    display: block;
  }
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    clear: both;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: 0.2s;
    background: transparent;
    pointer-events: none;
  }

  &:hover:after {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const ProfilePageImg = styled(ProfileImg)`
  width: 40dvw;
  max-width: 120px;
  height: 40dvw;
  max-height: 120px;
  margin-right: 30px;
`;

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 25px 15px;
`;

export const ProfileTxtWrap = styled.div`
  flex: 1;
  b {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 4px;
    svg {
      vertical-align: bottom;
      margin-left: 2px;
    }
  }
  span {
    display: block;
    margin-top: 8px;
    font-weight: 500;
    font-size: 1rem;
    color: ${(p) => p.theme.colors?.darkgray};
  }
`;

export const ProfileFollowBtn = styled.button`
  padding: 13px 20px;
  font-weight: 500;
  font-size: 1.15rem;
  letter-spacing: 0.01em;
  border-radius: 10rem;
  background: ${(p) => p.theme.colors?.black};
  color: ${(p) => p.theme.colors?.white};
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors?.gray};
  }
`;

export const LoadingWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: 99;
  color: #fff;
`;

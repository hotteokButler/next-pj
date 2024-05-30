import styled from "styled-components";


export const ProfileImg = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  background : #eee;
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
    top:0;
    left: 0;
    content: '';
    clear: both;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: 0.2s;
    background: transparent;
  }

  &:hover:after {
    background: rgba(0,0,0,0.05);
  }
`
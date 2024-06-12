import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const ModalCon = styled.div`
  position: relative;
  width: 80dvw;
  height: 85dvh;
  max-width: 600px;
  max-height: 580px;
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors?.white};
`;

export const ModalLogo = styled.div`
  padding: 0.5rem;
  margin: 0 auto 2rem;
  font-size: 1.7rem;
  text-align: center;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.7rem;
  padding: 1rem;
  cursor: pointer;
  z-index: 2;

  &:hover {
    color: ${(p) => p.theme.colors?.blue};
  }
`;

export const ModalSubTitle = styled.h3`
  margin: 2rem auto;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ModalForm = styled.form`
  width: 100%;
`;

export const ModalLabel = styled.label`
  display: block;
  width: 80%;
  max-width: 480px;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus,
  &:active,
  &:hover,
  &.on {
    box-shadow: 0px 0px 1px ${(p) => p.theme.colors?.pointColor};
    border-color: ${(p) => p.theme.colors?.pointColor};
    span {
      color: ${(p) => p.theme.colors?.pointColor};
    }
  }
`;
export const ModalTag = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  margin: 0 0 0.5rem;
  color: #ddd;
`;
export const ModalInputText = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.2;

  &::placeholder {
    color: #eee;
  }
`;

export const ModalSubmitBtn = styled.button<{ $varified: boolean }>`
  display: block;
  width: 80%;
  max-width: 480px;
  margin: 2rem auto;
  padding: 1rem;
  background: ${(p) => (p.$varified ? p.theme.colors?.pointColor : p.theme.colors?.gray)};
  color: ${(p) => p.theme.colors?.white};
  font-weight: bold;
  border-radius: 10rem;
  font-size: 1.2rem;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;


// post modal

export const PostModalCon = styled.div`
  position: relative;
  width: 80dvw;
  max-width: 600px;
  padding: 10px;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors?.white};
`;


export const PostFormCon = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 60px 15px 0px;
`;

export const PostFormWrap = styled.form`
  width: calc(100% - 55px);
  margin: 0 0 0 10px;

  textarea {
    border: none;
    width: 100%;
    height: 100px;
    resize: none;
  }
  hr {
    background: ${(p) => p.theme.colors?.border};
    height: 1px;
    border: 0;
  }
`;

export const PostIconBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 0;
  span {
    display: inline-block;
    cursor: pointer;
  }
  svg {
    width: 1.2rem;
    height: 1.2rem;
    path {
      fill: ${(p) => p.theme.colors?.pointColor};
    }
  }

  svg:hover {
    opacity: 0.8;
  }
`;

export const PostSubmitBtn = styled.button<{ $validate: boolean }>`
  margin: 0 0 0 auto;
  background: #eee;
  border-radius: 10rem;
  padding: 12px 20px 9px;
  font-size: 1rem;
  font-weight: 600;
  vertical-align: bottom;
  cursor: ${(p) => (p.$validate ? 'pointer' : 'unset')};
  color: ${(p) => p.theme.colors?.white};
  background: ${(p) => (p.$validate ? p.theme.colors?.pointColor : p.theme.colors?.gray)};

  &:hover {
    background: ${(p) => (p.$validate ? p.theme.colors?.darkBlue : p.theme.colors?.gray)};
  }
`;
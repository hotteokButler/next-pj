import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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


export const ModalSubmitBtn = styled.button`
    display: block;
    width: 80%;
    max-width: 480px;
    margin: 2rem auto;
    padding: 1rem;
    background: ${p => p.theme.colors?.pointColor};
    color: ${p => p.theme.colors?.white};
    font-weight: bold;
    border-radius: 10rem;
    font-size: 1.2rem;
    line-height: 1.5;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
`
import styled from 'styled-components';

export const SearchFillterForm = styled.form``;
export const SearchFillterLi = styled.div`
  padding: 15px;
  h4 {
    font-weight: 700;
    margin: 0 0 15px;
    padding: 0;
  }
`;

export const SearchRadio = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  input[type='radio'] {
    position: relative;
    appearance: none;
    width:20px;
    height:20px;
    border: max(2px, 0.1em) solid ${(p) => p.theme.colors?.black};
    border-radius: 50%;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 0 max(4px, 0.4em) ${(p) => p.theme.colors?.border};
      cursor: pointer;
    }
    &:after{
      pointer-events: none;
      position: absolute;
      content: '✓';
      clear: both;
      vertical-align: middle;
      top: 58%;
      left: 52%;
      transform : translate(-50%,-50%) ;
      font-weight:900;
      font-size: 1.2rem;
      color: ${(p) => p.theme.colors?.white};
      display: none;
    }
  }
  input[type='radio']:checked {
    border-color: ${(p) => p.theme.colors?.pointColor};
    background: ${(p) => p.theme.colors?.pointColor};
    &:hover {
      box-shadow: 0 0 0 max(4px, 0.4em) ${(p) => p.theme.colors?.blueOp02};
      cursor: pointer;
    }
    &:after,&:before {
      display: block;
    }
  }
  label {
    flex: 1;
    font-size: 0.9rem;
  }
`;

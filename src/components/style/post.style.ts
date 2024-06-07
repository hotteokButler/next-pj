import styled from 'styled-components';

export const PostCon = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  border-bottom: 1px solid ${(p) => p.theme.colors?.border};
`;

export const PostFormWrap = styled.form`
  width: calc(100% - 55px);
  margin: 0 0 0 10px;

  textarea {
    border: none;
    width: 100%;
    height: 50px;
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
  padding: 15px 15px 0;
  span {
    display: inline-block;
    cursor: pointer;
  }
  svg {
    width: 1.2rem;
    height: 1.2rem;
    path {
      fill: ${p => p.theme.colors?.pointColor};
    }
  }

  svg:hover {
    opacity: 0.8;
  }
`

export const PostSubmitBtn = styled.button<{$validate : boolean;}>`
    margin: 0 0 0 auto;
    background: #eee;
    border-radius: 10rem;
    padding: 12px 20px 9px;
    font-size: 1rem;
    font-weight: 600;
    vertical-align: bottom;
    cursor: pointer;
    color: ${p => p.theme.colors?.white};
    background : ${ p =>p.$validate? p.theme.colors?.pointColor : p.theme.colors?.gray};
    
    &:hover {
      background : ${ p => p.$validate ? p.theme.colors?.darkBlue : p.theme.colors?.gray};

    }
`
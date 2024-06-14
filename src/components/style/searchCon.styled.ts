import styled from 'styled-components';

export const SearchInputWrap = styled.div<{ $fixed: boolean }>`
  position: ${(p) => (p.$fixed ? 'fixed' : 'static')};

  ${({ $fixed }) =>
    $fixed
      ? `
    width:350px;
    z-index:5;
    top:0px;
    `
      : `
    padding: 10px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffffa6;
    backdrop-filter: blur(5px);
    border-bottom: 1px solid #eee;
    `}

  @media ${({ theme }) => theme.mediaSize?.desktop} {
    width: 290px;
  }
  @media ${({ theme }) => theme.mediaSize?.lgTablet} {
    display: none;
  }
`;
export const SearchInputForm = styled.form<{ $fixed: boolean }>`
  position: relative;

  width: ${({ $fixed }) => ($fixed ? 'inherit' : '85%')};
  display: inline-flex;
  height: ${({ $fixed }) => ($fixed ? '50px' : '45px')};
  justify-content: stretch;
  align-items: center;
  padding: 8px 15px;
  border-radius: 10rem;
  background: ${(p) => p.theme.colors?.border};
  ${({ $fixed }) => $fixed && `flex:1;`};
`;
export const SearchInputLabel = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: stretch;

  svg {
    width: 30px;
    height: 20px;
    margin-right: 8px;
  }
`;
export const SearchInputEl = styled.input`
  width: 100%;
  font-size: 1rem;
`;

export const SearchBackBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition : 0.2s;
  &:hover{
    background: ${p => p.theme.colors?.border};
  }
  svg {
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
  }
`;

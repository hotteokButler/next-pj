import styled from 'styled-components';

export const SearchInputWrap = styled.div`
  position: fixed;
  top: 0;
  width: 350px;
  z-index: 5;
  
  @media ${({ theme }) => theme.mediaSize?.desktop} {
    width: 290px;
  }
  @media ${({ theme }) => theme.mediaSize?.lgTablet} {
    display: none;
  }
`;
export const SearchInputForm = styled.form`
  position: relative;
  width: inherit;
  height: 50px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 8px 15px;
  border-radius: 10rem;
  background: ${(p) => p.theme.colors?.border};
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

import styled from 'styled-components';

export const MessageRoomLis = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  background-color: ${(p) => p.theme.colors?.white};
  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.theme.colors?.grayOp3};
  }
`;

export const MessageRoomInfo = styled.div`
  flex: 1;
  margin-left: 15px;
`;

export const MessageRoomInfoUser = styled.div`
  b {
    display: inline-block;
    margin-right: 5px;
    font-weight: 700;
  }
  span {
    display: inline-block;
    margin-right: 3px;
    color: ${(p) => p.theme.colors?.darkgray};
  }
`;

export const MessageRoomPreview = styled.p`
  margin: 8px 0 0;
  color: ${(p) => p.theme.colors?.darkgray};
`;

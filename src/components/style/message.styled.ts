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

export const MessageRoomTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 15px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.border};
  background: ${({ theme }) => theme.colors?.white};
  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors?.grayOp3};
  }
`;

export const MessageContentWrap = styled.main``;

export const MyMessage = styled.div`
  padding: 15px;
 text-align: right;
  p[data-area='message_box'] {
    padding: 12px 20px;
    border-radius: 3em 3em 0.2em 3em;
    background: ${({ theme }) => theme.colors?.pointColor};
    display: inline-block;
    max-width: 300px;
    margin: 0 0 0 auto;
    font-size: 0.9rem;
    line-height: 1.15em;
    color: ${({ theme }) => theme.colors?.white};
    text-align: left;
  }
  span[data-area='time_zone'] {
    display: block;
    width: 52%;
    display: block;
    margin: 8px 0 0 auto;
    text-align: right;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors?.darkgray};
  }
`;

export const OthersMessage = styled(MyMessage)`
 text-align: left;

  p[data-area='message_box'] {
    border-radius: 3em 3em  3em 0.2em;
    margin :0 auto 0 0;
    text-align: left;
    background: ${({ theme }) => theme.colors?.lightgray};
    color: ${({ theme }) => theme.colors?.black};

  }
  span[data-area='time_zone'] {
   margin :8px auto 0 0;
   text-align: left;
  }
`;        

import styled from 'styled-components';

// PostForm  START ==============

export const PostFormCon = styled.div`
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
// PostForm E N D ==============

// Post 내용 START ==============
export const PostConentWrap = styled.article`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${(p) => p.theme.colors?.border};
`;

export const PostConentCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: calc(100% - 55px);
  margin: 0 0 0 10px;
`;

export const PostMeta = styled.div`
  a {
    display: block;
  }
  span {
    display: inline-block;
    font-size: 0.95rem;
  }

  span[aria-label='user_nickname'] {
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
      text-decoration-thickness: 1.5px;
    }
  }
  span[aria-label='user_id'] {
    color: ${(p) => p.theme.colors?.darkgray};
  }
  span[aria-label='post_data'] {
    font-size: 0.9rem;
    color: ${(p) => p.theme.colors?.darkgray};
  }
`;

export const PostContents = styled.div`
  p[aria-label='content_text'] {
    margin: 10px 0;
  }
`;

export const PostImages = styled.li`
  img {
    max-height: 500px;
    border-radius: 18px;
    border: 1px solid ${(p) => p.theme.colors?.border};
  }
`;

// Post 내용 E N D ==============

// Post action 버튼 START ==============
export const PostActionBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0 0;

  span {
    display: inline-block;
    line-height: 38px;
    vertical-align: bottom;
    font-size: 0.8rem;
    margin-left: -4px;
    font-weight: 500;
    transition: 0.2s;
  }

  button {
    display: inline-block;
    cursor: pointer;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    transition: 0.2s;
    svg {
      width: 20px;
      height: 20px;
      transition: 0.2s;
      vertical-align: text-bottom;
    }
  }

  button[data-fill='blue'] {
    &:hover {
      background: ${(p) => p.theme.colors?.blueOp02};
      svg {
        fill: ${(p) => p.theme.colors?.pointColor};
      }
      & + span {
        color: ${(p) => p.theme.colors?.pointColor};
      }
    }
  }
  button[data-fill='green'] {
    &:hover {
      background: ${(p) => p.theme.colors?.greenOp02};
      svg {
        fill: ${(p) => p.theme.colors?.green};
      }
      & + span {
        color: ${(p) => p.theme.colors?.green};
      }
    }
  }
  button[data-fill='pink'] {
    &:hover {
      background: ${(p) => p.theme.colors?.pinkOp02};
      svg {
        fill: ${(p) => p.theme.colors?.pink};
      }
      & + span {
        color: ${(p) => p.theme.colors?.pink};
      }
    }
  }
`;

// Post action 버튼 E N D ==============

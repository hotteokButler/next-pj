'use client';

import ExploreMainCon from '@/app/(afterLogin)/_components/ExploreMainCon';
import Post from '@/app/(afterLogin)/_components/Post';
import PostCommentForm from '@/app/(afterLogin)/_components/PostCommentForm';
import { FixedTabWrap ,FixedTabBackBtn,FixedTabH4 } from '@/components/style/fixedTab.styled';
import { GoArrowLeft } from 'react-icons/go';
import { useRouter } from 'next/navigation';

export default function Status() {

  const router = useRouter();
  const onClickBackBtn : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <ExploreMainCon>
      <FixedTabWrap>
        <FixedTabBackBtn onClick={onClickBackBtn}>
          <GoArrowLeft />
        </FixedTabBackBtn>
        <FixedTabH4>게시하기</FixedTabH4>
      </FixedTabWrap>
      <Post />
      <PostCommentForm/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </ExploreMainCon>
  );
}

import { ProfileImg } from '@/components/style/common/commonStyle';
import * as S from '@/components/style/post.style';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import PostActionButtons from './PostActionButtons';
import PostImageCon from './PostImageCon';
import PostArticleWrap from './PostArticleWrap';
import { Post as IPost } from '@/model/Post';

dayjs.locale('ko');
dayjs.extend(relativeTime);

interface IProp {
  noImage?: boolean;
  post : IPost;
}
export default function Post({ noImage , post}: IProp) {
  const data = post;

  if (!data) return null;

  return (
    <PostArticleWrap post={data}>
      {/* profile  ===== */}
      <ProfileImg>
        <Link href={`/${data.User.id}`}>
          <img src={data.User.image} alt={data.User.nickname} />
        </Link>
      </ProfileImg>
      {/* posting contents */}
      <S.PostConentCon>
        {/* user 정보 */}
        <S.PostMeta>
          <Link href={`/${data.User.id}`}>
            <span aria-label='user_nickname'>{data.User.nickname}</span>
            &nbsp;
            <span aria-label='user_id'>&#64;{data.User.id}</span>
            &nbsp;
            <span aria-label='post_data'>&middot;&nbsp;{dayjs(data.createdAt).fromNow(true)}</span>
          </Link>
        </S.PostMeta>
        {/* 게시글 시작 */}
        <S.PostContents>
          <p aria-label='content_text'>{data.content}</p>
          {data.Images.length > 0 && <PostImageCon data={data} imgCnt={data.Images.length} />}
        </S.PostContents>
        {/* post action 버튼 */}
        <PostActionButtons colorDefSet={true} />
      </S.PostConentCon>
    </PostArticleWrap>
  );
}

import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

function generateDate() {
  //랜덤 날짜 설정
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    // 지난 주 부터 오늘까지 임의의 날짜 설정
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  { id: 'user01', nickname: 'annonymous', image: '/user_02.jpg', isPrivate: 'false', role: 'user' },
  { id: 'user02', nickname: 'ruru', image: faker.image.avatar(), isPrivate: 'true', role: 'user' },
  { id: 'user03', nickname: '레오', image: faker.image.avatar(), isPrivate: 'true', role: 'user' },
  { id: 'user04', nickname: '지지', image: faker.image.avatar(), isPrivate: 'false', role: 'user' },
];
const Posts = [];

//  대신 응답 보낼 부분

export const handler = [
  http.post('/api/login', () => {
    console.log('로그인');

    return HttpResponse.json(
      // json 형식으로 응답 보냄 (실제 보내지는 데이터)
      User[0],
      {
        headers: {
          // 헤더 설정
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
        },
      }
    );
  }),

  http.post('/api/logout', () => {
    console.log('로그아웃');

    return new HttpResponse(
      null, // 보낼 데이터가 없을 때 new HttpRespose를 많이 씀
      {
        headers: {
          'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
        },
      }
    );
  }),
  http.post('/api/users', async ({ request }) => {
    console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exists'), { //응답이 아니라 에러일때 또는 redirect일 때 status를 바꿔 줄 수 있음
    //   status: 403,
    // });
    return HttpResponse.text(
      JSON.stringify('ok'), // text를 보낼 대는 HttpResponse.text를 많이 씀
      {
        headers: {
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
        },
      }
    );
  }),
  http.get('/api/postRecommends', ({ request }) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    console.log('home 추천 게시글');
    return HttpResponse.json([
      {
        postId: cursor + 1, //포스트 아이디
        User: User[0], //작성자
        content: `${cursor + 1} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 2,
        User: User[1],
        content: `${cursor + 2} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 3,
        User: User[0],
        content: `${cursor + 3} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 4,
        User: User[2],
        content: `${cursor + 4} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 5,
        User: User[0],
        content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get('/api/followingPosts', ({ request }) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    console.log('home following 게시글');
    return HttpResponse.json([
      {
        postId: cursor + 1, //포스트 아이디
        User: User[0], //작성자
        content: `${cursor + 1} Following Posts~!`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 2,
        User: User[1],
        content: `${cursor + 2} Following Posts~!`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 3,
        User: User[0],
        content: `${cursor + 3} Following Posts~!`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 4,
        User: User[2],
        content: `${cursor + 4} Following Posts~!`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 5,
        User: User[3],
        content: `${cursor + 5} Following Posts~!`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 6,
        User: User[3],
        content: `${cursor + 6} Following Posts~!`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 7,
        User: User[1],
        content: `${cursor + 7} Following Posts~!`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get('/api/search/:tag', ({ request, params }) => {
    // :tag => 검색 할 때 마다 바뀌는 값을 콜론을 붙여서 입력 (Url Parameter)
    const url = new URL(request.url);
    const { tag } = params;
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    console.log('search result ');
    return HttpResponse.json([
      {
        postId: cursor + 1, //포스트 아이디
        User: User[0], //작성자
        content: `${cursor + 1} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 2,
        User: User[1],
        content: `${cursor + 2} 검색결과 ${tag}`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 3,
        User: User[0],
        content: `${cursor + 3} 검색결과 ${tag}`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 4,
        User: User[2],
        content: `${cursor + 4} 검색결과 ${tag}`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 5,
        User: User[3],
        content: `${cursor + 5} 검색결과 ${tag}`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 6,
        User: User[3],
        content: `${cursor + 6} 검색결과 ${tag}`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 7,
        User: User[1],
        content: `${cursor + 7} 검색결과 ${tag}`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get('/api/users/:userId', ({ request, params }) => {
    const { userId } = params;
    const found = User.find((v) => v.id === userId);
    if (found) return HttpResponse.json(found);
    else return HttpResponse.json({ message: 'no_such_user' }, { status: 404 });
  }),
  http.get('/api/users/:userId/posts', ({ request, params }) => {
    // 특정 사용자 게시글 (본인 포함)
    // :tag => 검색 할 때 마다 바뀌는 값을 콜론을 붙여서 입력 (Url Parameter)
    const url = new URL(request.url);
    const { userId } = params;
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    console.log(`${userId} Posts`);
    return HttpResponse.json([
      {
        postId: cursor + 1, //포스트 아이디
        User: User[0], //작성자
        content: `${cursor + 1} ${userId} 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 2,
        User: User[0],
        content: `${cursor + 2} ${userId} 게시글`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 3,
        User: User[0],
        content: `${cursor + 3} ${userId} 게시글`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 4,
        User: User[0],
        content: `${cursor + 4} ${userId} 게시글`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 5,
        User: User[0],
        content: `${cursor + 5} ${userId} 게시글`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 6,
        User: User[0],
        content: `${cursor + 6} ${userId} 게시글`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 7,
        User: User[0],
        content: `${cursor + 7} ${userId} 게시글`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get('/api/users/:userId/posts/:postId', ({ request, params }) => {
    const { userId, postId } = params;
    return HttpResponse.json({
      postId: 1, //포스트 아이디
      User: User[0], //작성자
      content: ` ${userId}의 게시글 ${postId} 상세 `,
      Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
      createdAt: generateDate(),
    });
  }),
  http.get('/api/users/:userId/posts/:postId/comments', ({ request, params }) => {
    // 게시글 답글
    const url = new URL(request.url);
    const { userId, postId } = params;
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    console.log('게시글 답글');
    return HttpResponse.json([
      {
        postId: cursor + 1, //포스트 아이디
        User: User[0], //작성자
        content: `${cursor + 1} ${postId} comments`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 2,
        User: User[1],
        content: `${cursor + 2} ${postId} comments`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 3,
        User: User[0],
        content: `${cursor + 3} ${postId} comments`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 4,
        User: User[2],
        content: `${cursor + 4} ${postId} comments`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 5,
        User: User[3],
        content: `${cursor + 5} ${postId} comments`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 6,
        User: User[3],
        content: `${cursor + 6} ${postId} comments`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 7,
        User: User[1],
        content: `${cursor + 7} ${postId} comments`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get('api/followRecommends', ({ request }) => {
    console.log('follow 추천 대상');
    return HttpResponse.json(User);
  }),
  http.get('api/trends', ({ request }) => {
    console.log('trends');
    return HttpResponse.json([
      //추후 해시테그 검색 결과
      { tagId: 1, title: '트렌드01', count: 1200 },
      { tagId: 2, title: '트렌드02', count: 1220 },
      { tagId: 3, title: '트렌드03', count: 1230 },
      { tagId: 4, title: '트렌드04', count: 1240 },
      { tagId: 5, title: '트렌드05', count: 1250 },
      { tagId: 6, title: '트렌드06', count: 1260 },
      { tagId: 7, title: '트렌드07', count: 1270 },
    ]);
  }),
];

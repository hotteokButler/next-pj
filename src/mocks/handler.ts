import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

function generateDate() {  //랜덤 날짜 설정
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({ // 지난 주 부터 오늘까지 임의의 날짜 설정
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  { id: 'user01', nickname: 'james', image: faker.image.avatar(), isPrivate: 'false', role: 'user' },
  { id: 'user02', nickname: 'ruru', image: faker.image.avatar(), isPrivate: 'true', role: 'user' },
  { id: 'user03', nickname: '레오', image: faker.image.avatar(), isPrivate: 'true', role: 'user' },
];
const Posts = [];

//  대신 응답 보낼 부분

export const handler = [
  http.post('/api/login', () => {
    console.log('로그인');

    return HttpResponse.json( // json 형식으로 응답 보냄 (실제 보내지는 데이터)
      { id: 'anonymous02', nickname: 'anonymous', image: '/user_02.jpg', isPrivate: 'false', role: 'user' },
      {
        headers: { // 헤더 설정
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
    });
  }),
  http.post('/api/users', async ({ request }) => {
    console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exists'), { //응답이 아니라 에러일때 또는 redirect일 때 status를 바꿔 줄 수 있음
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify('ok'), // text를 보낼 대는 HttpResponse.text를 많이 씀
    {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    });
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
];

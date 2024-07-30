import { http, HttpResponse } from 'msw';

//  대신 응답 보낼 부분

export const handler = [
  http.post('/api/login', () => {
    console.log('로그인');

    return HttpResponse.json(
      { id: 'anonymous02', nickname: 'anonymous', image: '/user_02.jpg' },
      {
        headers: {
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
        },
      }
    );
  }),

  http.post('/api/logout', () => {
    console.log('로그아웃');

    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  http.post('/api/users', async ({ request }) => {
    console.log('회원가입');
    return HttpResponse.text(JSON.stringify('user_exists'), {
      status: 403,
    })
    // return HttpResponse.text(JSON.stringify('ok'), {
    //   headers: {
    //     'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
    //   }
    // })
  }),
];

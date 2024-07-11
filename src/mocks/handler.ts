import { http, HttpResponse } from 'msw';

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
];

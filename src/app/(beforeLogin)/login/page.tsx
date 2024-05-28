'use client';

import { useRouter } from 'next/navigation';
import Main from '../_component/Main';

/*
기본적으로 server component라서 
  redirect('/i/flow/login');
하게되면 서버에서 redirect 시키기 때문에 intercepting routing이 동작하지 않는다
(intercepting routing은 client에서 redirect 해야지 동작함)

client routing 사용
-> router.push의 경우 browser history stack에 등록
      => 이럴경우 뒤로가기하면 다시 /login으로 오게되어 다시 /i/flow/login으로 리다이렉트 됨
-> route.replace의 경우 browser history stack에 등록되지 x

*/
export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login', { scroll: false });
  
  return <Main/>;
}

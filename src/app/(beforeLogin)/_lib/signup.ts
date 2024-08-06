"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const onSubmit = async (prevData: any, formData: FormData) => {

  //form data validation  START==========
  if (!formData.get('user_id') || !(formData.get('user_id') as string)?.trim()) {
    return { message: 'no_id'  };
  }
  if (!formData.get('user_nick') || !(formData.get('user_nick') as string)?.trim()) {
    return { message: 'no_nickname' };
  }
  if (!formData.get('user_password') || !(formData.get('user_password') as string)?.trim()) {
    return { message: 'no_password' };
  }
  if (!formData.get('user_profile')) {
    console.log(formData.get('user_profile'));
    return {message: 'no_image'};
  }
  //form data validation E N D==========

  let ShouldRedirect = false;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: 'POST', // *GET, POST, PUT, DELETE 등
      credentials: 'include', // include 쿠키 전달 가능
      headers: {
        'Content-Type': 'applicatoin/json',
      },
      body: JSON.stringify({
        name: formData.get('user_nick'),
        nickname: formData.get('user_nick'),
        email: formData.get('user_id'),
        image: formData.get('user_profile')
      }),
    });


    if(response.status === 403) {
      return {message : 'user_exists'};
    }
    console.log(await response.json());

    ShouldRedirect = true;

    await signIn('credentials', {
      username : formData.get('user_id'),
      password: formData.get('user_password'),
      redirect: false,
    })

  } catch (errors) {
    console.log(errors);
  }

  if(ShouldRedirect) {
    redirect('/home'); // redirect는 try catch문 안에서 쓸 수 없음
  }



  
};

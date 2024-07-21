"use server";

export default async (prevData :any, formData: FormData) => {
  if (!formData.get('user_id') || !(formData.get('user_id') as string)?.trim()) {
    return { message: 'no_id' };
  }
  if (!formData.get('user_nick') || !(formData.get('user_nick') as string)?.trim()) {
    return { message: 'no_nickname' };
  }
  if (!formData.get('user_password') || !(formData.get('user_password') as string)?.trim()) {
    return { message: 'no_password' };
  }
  if (!formData.has('user_profile')) {
    console.log(formData.get('user_profile'));
    return { message: 'no_image' };
  }
}
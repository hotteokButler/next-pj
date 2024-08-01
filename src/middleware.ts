import {auth} from './auth';
import { NextResponse } from 'next/server'


export default auth((req) => {
  // req.auth
})

export const config = {
  matcher: ['/compose/post', '/compose/comment', '/explore', '/home', '/messages', 'search'],
};

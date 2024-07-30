"use client";

import worker from '@/mocks/browser';
import React, { useEffect } from 'react'

export default function MSWComponent() {
  useEffect(()=>{
     if(typeof window !=='undefined') { //typeof window === 'undefined' : 브라우저에서 돌아가는 걸 보장 해야 함
        if(process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
          require('@/mocks/browser');
        }
     }
  },[])
  return null;
}

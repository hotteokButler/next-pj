'use client';

import * as S from '@/components/style/post.style';
import React from 'react';
import { IData } from './Post';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
  data: IData;
  imgCnt: number;
}

export default function PostImageCon({ data, imgCnt }: IProps) {
  if (!data) return;
  return (
    <S.PostImagesUl $imgCnt={imgCnt}>
      {data.Images.map((images, idx) => (
        <S.PostImages key={idx}>
            <Link href={`/${data.User.id}/status/${data.postId}/photo/${images.imageId}`} scroll={false}>
              <Image src={images.link} alt={images.imageId} width={255} height={191}/>
            </Link>
        </S.PostImages>
      ))}
    </S.PostImagesUl>
  );
}

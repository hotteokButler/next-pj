import React from 'react';

export default async function getPostRecommens() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

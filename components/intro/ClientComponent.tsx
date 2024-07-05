'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export default function ClientComponent({ children, content }: Props) {
  console.log('ClientComponent');

  return (
    <div className="border-2 border-red-500 p-4">
      <button
        onClick={async () => {
          alert('ServerComponent');
        }}
      >
        OnClick
      </button>
      ClientComponent
      {content}
      {children}
    </div>
  );
}

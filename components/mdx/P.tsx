import React from 'react';

export default function P({ children }: { children?: React.ReactNode }) {
  if (typeof children === 'string' && children === '!nextline') {
    return <br />;
  }
  return <p className="text-base font-light">{children}</p>;
}

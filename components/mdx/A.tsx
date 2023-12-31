import React from 'react';

export default function A(props: { href?: string; children?: React.ReactNode }) {
  return (
    <a className="underline cursor-pointer underline-offset-4" target="_blank" href={props.href}>
      {props.children}
    </a>
  );
}

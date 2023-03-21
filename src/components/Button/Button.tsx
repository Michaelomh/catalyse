import React from 'react';

export interface ButtonProps {
  test: string;
}

export const Button = ({ test }: ButtonProps) => {
  console.log(test);
  return <button>Click Me</button>;
};

import React from 'react';
import * as styles from './Button.styles';

export interface ButtonProps {
  test: string;
}

export const Button = ({ test }: ButtonProps) => {
  return <button style={styles.ButtonStyle}>{test}</button>;
};

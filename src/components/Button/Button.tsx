import { Button as ChakraButton } from '@chakra-ui/react';
import React from 'react';
import * as styles from './Button.styles';

export interface ButtonProps {
  test: string;
}

export const Button = ({ test }: ButtonProps) => {
  return (
    <ChakraButton style={styles.ButtonStyle} bgColor="danger">
      {test}
    </ChakraButton>
  );
};

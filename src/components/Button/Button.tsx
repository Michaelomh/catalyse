import { Button as ChakraButton } from '@chakra-ui/react';
import React from 'react';
import * as styles from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({
  size = 'md',
  colorScheme = 'blue',
  variant = 'filled',
  isDisabled = false,
  isLoading = false,
  loadingText,
  spinner,
  spinnerPlacement,
  iconSpacing = 1,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <ChakraButton
      size={size}
      colorScheme={colorScheme}
      variant={variant}
      isDisabled={isDisabled}
      isLoading={isLoading}
      loadingText={loadingText}
      spinner={spinner}
      spinnerPlacement={spinnerPlacement}
      iconSpacing={iconSpacing}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={onClick}
      type={type}
      {...styles.ButtonStyle({ variant, colorScheme, isDisabled, isLoading, size })}
    >
      {children}
    </ChakraButton>
  );
};

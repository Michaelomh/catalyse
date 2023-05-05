import { Button as ChakraButton } from '@chakra-ui/react';
import React from 'react';
import * as styles from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({
  size,
  colorScheme,
  variant,
  isActive,
  isDisabled,
  isLoading,
  loadingText,
  spinner,
  spinnerPlacement,
  iconSpacing,
  leftIcon,
  rightIcon,
  onClick,
  type,
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <ChakraButton
      style={styles.ButtonStyle}
      size={size}
      colorScheme={colorScheme}
      variant={variant}
      isActive={isActive}
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
    >
      {children}
    </ChakraButton>
  );
};

import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import React from 'react';

export type ButtonProps = {
  /**
   * Set size of the `Button` component.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Set visual color appearance of `Button` component.
   */
  colorScheme?: 'grey' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink';

  /**
   * Set visual styling appearance of `Button` component.
   */
  variant?: 'rounded' | 'unstyled' | 'ghost' | 'filled';

  isActive?: ChakraButtonProps['isActive'];
  isDisabled?: ChakraButtonProps['isDisabled'];
  isLoading?: ChakraButtonProps['isLoading'];

  loadingText?: ChakraButtonProps['loadingText'];
  spinner?: ChakraButtonProps['spinner'];
  spinnerPlacement?: ChakraButtonProps['spinnerPlacement'];

  iconSpacing?: ChakraButtonProps['iconSpacing'];

  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;

  rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;

  onClick?: ChakraButtonProps['onClick'];

  type?: ChakraButtonProps['type'];
};

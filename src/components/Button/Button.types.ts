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
  variant?: 'rounded' | 'text' | 'ghost' | 'filled';

  /**
   * Determines if `Button` component should be disabled.
   */
  isDisabled?: ChakraButtonProps['isDisabled'];

  /**
   * Determines if `Button` component should loading.
   */
  isLoading?: ChakraButtonProps['isLoading'];

  /**
   * Set the loading text while `Button` component is in loading state.
   */
  loadingText?: ChakraButtonProps['loadingText'];

  /**
   * Set the Spinner icon to the specified React Element in loading state.
   */
  spinner?: ChakraButtonProps['spinner'];

  /**
   * Set the placement of the Spinner icon at the start or end of the component.
   */
  spinnerPlacement?: ChakraButtonProps['spinnerPlacement'];

  /**
   * Set the spacing between icon and children of `Button` component.
   * Note: This would affect the Spinner icon in loading state.
   */
  iconSpacing?: ChakraButtonProps['iconSpacing'];

  /**
   * Set the icon on the left of the `Button` component
   * @todo when icons are implemented
   */
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;

  /**
   * Set the icon on the right of the `Button` component
   * @todo when icons are implemented
   */
  rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;

  /**
   * Callback when `Button` component is clicked.
   */
  onClick?: ChakraButtonProps['onClick'];

  /**
   * Set `Button` type.
   */
  type?: ChakraButtonProps['type'];
};

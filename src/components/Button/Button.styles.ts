import { getDarkColor, getDarkerColor, getlightColor, getMainColor } from '../../utils/getColor';
import { ButtonProps } from './Button.types';

const getBorderRadius = ({ variant }: ButtonProps) => {
  switch (variant) {
    case 'rounded':
      return 'rounded';
    case 'text':
    case 'filled':
    case 'ghost':
    default:
      return 'md';
  }
};

const getBorder = ({ variant }: ButtonProps) => {
  switch (variant) {
    case 'ghost':
      return '2px solid';
    case 'text':
    case 'rounded':
    case 'filled':
    default:
      return 'none';
  }
};

const getBackgroundColor = ({ colorScheme, variant }: ButtonProps) => {
  if (variant === 'ghost') return 'white';
  if (variant === 'text') return 'transparent';
  return getMainColor(colorScheme);
};

const getHoverBackground = ({ colorScheme, variant, isDisabled, isLoading }: ButtonProps) => {
  if (isDisabled || isLoading) return;
  if (variant === 'ghost') return 'white';
  if (variant === 'text') return getMainColor(colorScheme);

  return getDarkColor(colorScheme);
};

const getBorderColor = ({ colorScheme, variant }: ButtonProps) => {
  if (variant === 'ghost') return 'grey.800';
  return getMainColor(colorScheme);
};

const getHoverBorderColor = ({ colorScheme, isDisabled, isLoading }: ButtonProps) => {
  if (isDisabled || isLoading) return;
  return getMainColor(colorScheme);
};

const getTextColor = ({ variant }: ButtonProps) => {
  if (variant === 'filled' || variant === 'rounded') return 'white';
  return 'grey.800';
};

const getHoverTextColor = ({ colorScheme, variant, isDisabled, isLoading }: ButtonProps) => {
  if (isDisabled || isLoading) return;
  if (variant !== 'ghost') return 'white';
  return getMainColor(colorScheme);
};

const getPaddingX = ({ size }: ButtonProps) => {
  switch (size) {
    case 'sm':
      return 2.5;
    case 'md':
      return 3;
    case 'xl':
      return 4;
    case 'lg':
    default:
      return 3.5;
  }
};

const getHeight = ({ size }: ButtonProps) => {
  switch (size) {
    case 'sm':
      return '40px';
    case 'md':
      return '48px';
    case 'xl':
      return '64px';
    case 'lg':
    default:
      return '56px';
  }
};

const getCursor = ({ isLoading, isDisabled }: ButtonProps) => {
  if (isLoading) return 'progress';
  if (isDisabled) return 'not-allowed';
  return 'pointer';
};

const getActiveColor = ({ colorScheme, variant, isDisabled, isLoading }: ButtonProps) => {
  if (isDisabled || isLoading) return;
  if (variant === 'ghost' || variant === 'text') return getlightColor(colorScheme);
  return getMainColor(colorScheme);
};

export const ButtonStyle = (args: ButtonProps) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getBorderRadius(args),
    border: getBorder(args),
    borderColor: getBorderColor(args),
    backgroundColor: getBackgroundColor(args),
    color: getTextColor(args),
    paddingX: getPaddingX(args),
    minH: getHeight(args),
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '16px',
    _hover: {
      cursor: getCursor(args),
      borderColor: getHoverBorderColor(args),
      bgColor: getHoverBackground(args),
      color: getHoverTextColor(args),
    },
    _active: {
      backgroundColor: getActiveColor(args),
    },
    _focusWithin: {
      outline: ' 2px solid',
      outlineColor: 'blue.200',
      outlineOffset: '0px',
    },
  } as const;
};

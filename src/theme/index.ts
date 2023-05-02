import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { fonts, textStyles } from './typography';
import { sizes } from './sizes';
import { breakpoints } from './breakpoints';
import { spacing } from './spacing';

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  spacing,
  sizes,
  breakpoints,
});

export default theme;

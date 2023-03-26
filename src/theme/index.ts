import { extendTheme, space } from '@chakra-ui/react';
import borderRadius from './borderRadius';

import colors from './colors';
import { fonts, textStyles } from './typography';

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  space,
  radii: borderRadius,
});

export default theme;

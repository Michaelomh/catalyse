import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter';
import '@fontsource/nunito';

import { colors } from './colors';
import { fonts, textStyles } from './typography';
import { sizes } from './sizes';
import { breakpoints } from './breakpoints';
import { space } from './space';
import { radii } from './radii';

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  space,
  sizes,
  breakpoints,
  radii,
});

export default theme;

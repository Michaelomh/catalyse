import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  options: { showPanel: true },
  chakra: {
    theme,
  },
};

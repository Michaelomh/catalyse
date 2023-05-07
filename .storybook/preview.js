import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true, hideNoControlsWarning: true },
  options: { showPanel: true },
  layout: 'centered',
  viewMode: 'canvas',
  chakra: {
    theme,
  },
};

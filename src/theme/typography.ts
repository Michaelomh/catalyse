/**
 *   display1: {}, // for main page
  display2: {},
  display3: {},
  code1: {}, // for inline code snippets and smaller code elements
  code2: {}, // for large code snippets and larger code elements
 */

export const textStyles = {
  heading1: {
    fontFamily: 'heading',
    lineHeight: '40px',
    fontSize: '32px',
    fontWeight: 400,
  }, // for heading 1
  heading2: {
    fontFamily: 'heading',
    lineHeight: '36px',
    fontSize: '28px',
    fontWeight: 400,
  }, // for heading 2
  heading3: {
    fontFamily: 'heading',
    lineHeight: '32px',
    fontSize: '24px',
    fontWeight: 400,
  }, // for heading 3
  subheading1: {
    fontFamily: 'heading',
    lineHeight: '28px',
    fontSize: '22px',
    fontWeight: 500,
  }, // meant to be the subheading for heading1
  subheading2: {
    fontFamily: 'heading',
    lineHeight: '24px',
    fontSize: '15px',
    fontWeight: 500,
  }, // meant to be the subheading for heading2
  subheading3: {
    fontFamily: 'heading',
    lineHeight: '20px',
    fontSize: '14px',
    fontWeight: 500,
  }, // meant to be the subheading for heading3
  body1: {
    fontFamily: 'body',
    lineHeight: '24px',
    fontSize: '16px',
    fontWeight: 400,
  }, // Main body text, for most
  body2: {
    fontFamily: 'body',
    lineHeight: '20px',
    fontSize: '14px',
    fontWeight: 400,
  },
  body3: {
    fontFamily: 'body',
    lineHeight: '16px',
    fontSize: '12px',
    fontWeight: 400,
  },
};

/**
 * This fontFamily style object should only be used for textStyles, and should not be used directly in your application.
 * @mixin
 */
export const fonts = {
  heading: 'Nunito, sans-serif',
  body: 'Inter, sans-serif',
  mono: 'Source Code Pro, monospace',
};

/**
 * This fontSize style object should only be used for textStyles, and should not be used directly in your application.
 * @mixin
 */
export const fontSizes = {
  heading1: '32px',
  heading2: '28px',
  heading3: '24px',
  body1: '14px',
  body2: '14px',
  body3: '14px',
  title1: '14px',
  title2: '14px',
  title3: '14px',
};

export const fontWeight = {
  light: 300,
  normal: 400,
  semibold: 600,
};

/**
 * This lineHeight style object should only be used for textStyles, and should not be used directly in your application.
 * @mixin
 */
export const lineHeight = {
  heading: '.75rem',
  body: '1rem',
  title: '1.25rem',
};

/**
 * This letterSpacing style object should only be used for textStyles, and should not be used directly in your application.
 * @mixin
 */
export const letterSpacing = {
  heading: '.75rem',
  body: '1rem',
  title: '1.25rem',
};

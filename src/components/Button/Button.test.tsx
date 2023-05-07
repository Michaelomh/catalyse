import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe(Button, () => {
  it('label appear correctly', () => {
    render(<Button test="testing" />);

    expect(screen.getByRole('button')).toHaveTextContent('testing');
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../../../components/atoms/button';

test('Button clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Button</Button>);
  fireEvent.click(screen.getByText(/button/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

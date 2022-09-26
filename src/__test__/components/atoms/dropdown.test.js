import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dropdown from '../../../components/atoms/dropdown';

test('Simulate selection', () => {
  const { getByTestId, getAllByTestId } = render(<Dropdown />);
  // The value should be the key of the option
  fireEvent.change(getByTestId('select'), { target: { value: 'male' } });
  const options = getAllByTestId('select-option');
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();
});

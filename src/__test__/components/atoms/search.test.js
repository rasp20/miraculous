import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../../../components/atoms/search';

afterEach(cleanup);

describe('Search Component', () => {
  it('Search Button clicked', () => {
    const handleClick = jest.fn();
    render(<Search onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('search-button'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('Search Input on change', async () => {
    const handleClick = jest.fn();
    const handleOnSearch = jest.fn();
    render(<Search onClick={handleClick} onSearch={handleOnSearch} />);
    const searchInput = screen.getByTestId('search-input');
    userEvent.type(searchInput, 'susan');

    await waitFor(() => {
      expect(searchInput.value).toBe('susan');
    });
  });
});

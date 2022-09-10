import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App Test', () => {
  it('should contains heading Hello world', () => {
    render(<App />);
    const heading = screen.getByText(/Hello world!/i);
    expect(heading).toBeInTheDocument();
  });
});

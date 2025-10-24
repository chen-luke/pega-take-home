import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders content', () => {
  render(<Navigation />);
  const createLink = screen.getByText('Create');
  expect(createLink).toBeInTheDocument();
  expect(createLink.tagName).toBe('A');
});

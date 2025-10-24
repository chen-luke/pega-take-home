import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders content', () => {
  render(<Navigation />);
  const createLink = screen.getByText('Create');
  expect(createLink).toBeInTheDocument();
  expect(createLink.tagName).toBe('A');
});

// test clicking on create should open up drop down

// test nav should expand on hover

// test nav should overflow if there are too many elements

// test mobile nav should have hamburger menu if there are too many nav items

// test mobile nav should not show hamburger menu if there are less than some threshold

// clicking on notification / recent should activate sub level

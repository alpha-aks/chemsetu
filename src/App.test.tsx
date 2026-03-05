import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar';

jest.mock(
  'react-router-dom',
  () => {
  return {
    __esModule: true,
    BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    Routes: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Route: ({ element }: { element: React.ReactNode }) => <>{element}</>,
    useLocation: () => ({ pathname: '/' }),
    Link: ({ to, children, ...rest }: { to: string; children: React.ReactNode }) => (
      <a href={to} {...rest}>
        {children}
      </a>
    ),
  };
  },
  { virtual: true }
);

test('renders navbar logo', () => {
  render(<Navbar />);
  expect(screen.getByAltText(/chemsetu logo/i)).toBeInTheDocument();
});

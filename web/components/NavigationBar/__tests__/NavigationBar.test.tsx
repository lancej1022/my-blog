import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
// import { UrlObject } from 'url';

import { NavigationBar } from '../NavigationBar';

// jest.mock('next/link', () => {
//   type Url = string | UrlObject;
//   type LinkProps = {
//     href: Url;
//     as?: Url;
//   };

//   return ({ children, href }: React.PropsWithChildren<LinkProps>) =>
//     React.cloneElement(React.Children.only(children), { href });
// });

describe('NavigationBar component', () => {
  test('should render', () => {
    render(<NavigationBar />);

    expect(screen.getByText(/myhabits/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toHaveTextContent(/login/i);
  });

  test.skip('should route to /login when login button is clicked', async () => {
    render(<NavigationBar />);
    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();
    expect(screen.queryByText(/Forgot password?/i)).not.toBeInTheDocument();

    userEvent.click(loginButton);
    expect(await screen.findByText(/Forgot password?/i)).not.toBeInTheDocument();
  });
});

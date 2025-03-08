import { render, screen, fireEvent } from '@testing-library/react';
import AccountActive from '../page';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import jwt from 'jsonwebtoken'; // Để decode token
import { useApiSecure } from '@/hooks/useApiSecure';

// Mocking dependencies
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('react-hook-form', () => ({
  useForm: jest.fn()
}));

jest.mock('jsonwebtoken', () => ({
  decode: jest.fn()
}));

jest.mock('@/hooks/useApiSecure');

describe('AccountActive Component', () => {
  // const mockPush = jest.fn();

  // beforeEach(() => {
  //   (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  //   (useForm as jest.Mock).mockReturnValue({
  //     handleSubmit: (fn: any) => fn,
  //     reset: jest.fn()
  //   });
  //   (useApiSecure as jest.Mock).mockReturnValue({
  //     post: jest.fn()
  //   });
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it('renders the component', () => {
    render(<AccountActive />);
    expect(screen.getByText(/Account Activation/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Please, enter code/i)).toBeInTheDocument();
  });

  it('successfully activates an account and redirects', async () => {
    const mockToken = jwt.sign({ id: 1 }, 'your-secret'); // Tuỳ chỉnh secret cho test
    localStorage.setItem('access-token', mockToken);

    (useApiSecure as jest.Mock).mockReturnValue({
      post: jest.fn().mockResolvedValue({ data: { statusMessage: 'Account activated successfully!' } })
    });

    render(<AccountActive />);

    fireEvent.change(screen.getByPlaceholderText(/Please, enter code/i), {
      target: { value: '123456' }
    });

    fireEvent.click(screen.getByRole('button', { name: /Activation/i }));

    expect(await screen.findByText('Account activated successfully!')).toBeInTheDocument();
    expect(mockPush).toHaveBeenCalledWith('/sign-in');
  });

  it('handles error on account activation', async () => {
    const mockToken = jwt.sign({ id: 1 }, 'your-secret');
    localStorage.setItem('access-token', mockToken);

    (useApiSecure as jest.Mock).mockReturnValue({
      post: jest.fn().mockRejectedValue({
        response: { data: { message: 'Activation failed!' } }
      })
    });

    render(<AccountActive />);

    fireEvent.change(screen.getByPlaceholderText(/Please, enter code/i), {
      target: { value: 'wrong-code' }
    });

    fireEvent.click(screen.getByRole('button', { name: /Activation/i }));

    expect(await screen.findByText('Activation failed!')).toBeInTheDocument();
    // expect(mockPush).toHaveBeenCalledWith('/account-active');
  });
});

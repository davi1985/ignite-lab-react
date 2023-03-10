import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('should render correctly', () => {
    render(<Header />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { Links } from '.';

describe('Links component', () => {
  it('should render correctly', () => {
    render(<Links />);

    expect(screen.getByText('Comunidade do Discord')).toBeInTheDocument();
    expect(screen.getByText('Acessar o desafio')).toBeInTheDocument();
  });
});

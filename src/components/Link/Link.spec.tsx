import { render, screen } from '@testing-library/react';
import { Link } from '.';

describe('Link component', () => {
  it('should render correctly', () => {
    const mockIcon = <div>icon</div>;
    render(<Link href="#" icon={mockIcon} label={'Test'} type="primary" />);

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('icon')).toBeInTheDocument();
  });
});

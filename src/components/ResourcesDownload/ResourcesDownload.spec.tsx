import { render, screen } from '@testing-library/react';
import { ResourcesDownload } from '.';

describe('ResourcesDownload component', () => {
  it('should render correctly', () => {
    render(<ResourcesDownload />);

    expect(screen.getByText('Material complementar')).toBeInTheDocument();
    expect(screen.getByText('Wallpapers exclusivos')).toBeI;
  });
});

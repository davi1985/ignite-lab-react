import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { App } from './App';

const mocks: any[] = [];

describe('<App />', () => {
  it('should render correctly', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(screen.getByTestId('list')).toBeInTheDocument();
  });
});

/* eslint-disable prefer-const */
import React from 'react';
import { render } from '@testing-library/react';

import { Template } from '../Template';

describe('Testing Page <Template />', () => {
  const Component: React.FC = () => <h1>Component</h1>;

  it('Should render Component', () => {
    const { getByText } = render(
      <Template>
        <Component />
      </Template>,
    );

    expect(getByText('Component')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';

import Shareds from './shareds';

describe('Shareds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shareds />);
    expect(baseElement).toBeTruthy();
  });
});

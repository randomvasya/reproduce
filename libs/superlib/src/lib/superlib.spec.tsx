import { render } from '@testing-library/react';

import Superlib from './superlib';

describe('Superlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Superlib />);
    expect(baseElement).toBeTruthy();
  });
});

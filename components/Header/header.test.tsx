import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Header  from '.';

describe('Menu', () => {
  it('render correctly', async () => {
    render(<Header />);

    expect(await screen.getByText('moxus.org')).toBeInTheDocument();
  });
})

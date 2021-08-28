import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Menu from '.';

describe('Menu', () => {
  it('render correctly', async () => {
    render(<Menu />);

    expect(await screen.getByText('work')).toBeVisible();

        // screen.getAllByRole('listitem');

    // screen.debug();
  });
})

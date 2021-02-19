import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from '../Toggle';

const classNames = {
  base: 'react-toggle',
  focus: 'react-toggle--focus',
  checked: 'react-toggle--checked',
  disabled: 'react-toggle--disabled',
};

describe('Toggle Component', () => {
  test('correctly adopts the defaultChecked prop', () => {
    const { unmount } = render(<Toggle aria-label="test toggle" defaultChecked />);

    expect(screen.getByLabelText('test toggle')).toBeChecked();
    unmount();

    render(<Toggle aria-label="test toggle" defaultChecked={false} />);
    expect(screen.getByLabelText('test toggle')).not.toBeChecked();
  });

  test('cannot be toggled when disabled', () => {
    const { unmount } = render(<Toggle aria-label="test toggle" defaultChecked />);

    const checkbox = screen.getByLabelText('test toggle');

    expect(checkbox).toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    unmount();

    render(<Toggle aria-label="test toggle" defaultChecked disabled />);
    const newCheckbox = screen.getByLabelText('test toggle');
    expect(newCheckbox).toBeChecked();
    userEvent.click(newCheckbox);
    expect(newCheckbox).toBeChecked();
  });
});

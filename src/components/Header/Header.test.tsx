import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('should render the header', () => {
    const handler = jest.fn();
    render(<Header currentScore={0} highScore={0} resetGame={handler} />);
    const titleEl = screen.getByText('Memory Match');
    expect(titleEl).toBeInTheDocument();
  });
});

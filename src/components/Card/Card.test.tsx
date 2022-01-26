import { render, screen } from '@testing-library/react';
import Card from './Card';
import { animals } from '../../constants';
describe('<Card />', () => {
  it('should render the card', () => {
    const handler = jest.fn();

    render(<Card id='my-test-id' name='test-name' click={handler} />);
    const cardTextElement = screen.queryByText('test-name');
    expect(cardTextElement).toBeInTheDocument();
  });

  it('should render the image if not in animals name', () => {
    const handler = jest.fn();
    render(<Card id='my-test-id' name='test-name' click={handler} />);
    const cardImgElement = screen.queryByAltText('test-name');
    expect(cardImgElement).not.toBeInTheDocument();
  });

  it('should render the image if in animals', () => {
    const handler = jest.fn();
    render(<Card id='my-test-id' name={`${animals[0]}`} click={handler} />);
    const cardImgElement = screen.queryByAltText(`${animals[0]}`);
    expect(cardImgElement).toBeInTheDocument();
  });
});

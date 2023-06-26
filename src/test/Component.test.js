import { render, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Home from '../pages/Home';
import Header from '../pages/Header';
import Quote from '../pages/Quote';

describe('component test', () => {
  it('render home title', () => {
    render(<Home />);
    const header = screen.getByText(/Welcome to our page!/i);
    expect(header).toMatchSnapshot();
  });

  it('render calculator title', () => {
    render(<Calculator />);
    const header = screen.getByText(/Let's do some maths!/i);
    expect(header).toMatchSnapshot();
  });

  it('render Navlink title', () => {
    <Route>
      render(
      <Header />
      ); const header = screen.getByText(/Maths Magician/i);
      expect(header).toMatchSnapshot();
    </Route>;
  });
  it('simulate user click event', () => {
    <MemoryRouter>
      render(
      <Header />
      ) const linkEl = screen.getByText(/home/i);
      fireEvent.click(linkEl); expect(getByText(/Welcome to our
      page!/i)).toBeInTheDocument();
    </MemoryRouter>;
  });

  it('renders a div element with class name "Quote"', () => {
    render(<Quote />);
    const divElement = screen.getByTestId('Quote');

    expect(divElement).toMatchSnapshot();
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../Home';

describe('Home', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  describe('when user enters valid data', () => {
    it('shows estimated salary', async () => {
      render(<Home />);

      userEvent.type(screen.getByTestId('experience-field'), '20');
      userEvent.selectOptions(screen.getByTestId('location-field'), ['STOCKHOLM']);
      userEvent.selectOptions(screen.getByTestId('year-field'), ['2020']);
      userEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() => {
        expect(screen.getByTestId('stats')).toHaveTextContent('30 960,00 kr');
      });
    });
  });
});

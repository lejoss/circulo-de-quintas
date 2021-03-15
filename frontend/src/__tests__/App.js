import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders learn react link', () => {
	render(<App />);
	//	const nameInput = screen.getTextByLabel(/name/i)
	const linkElement = screen.getByText(/learn react/i);
	// userEvent.type(nameInput, 'Mary');
	// userEvent.click(linkElement);

	expect(linkElement).toBeInTheDocument();
});

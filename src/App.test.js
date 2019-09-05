import React from 'react';
import { render } from '@testing-library/react' 
import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

test('Renders App coponent without crashing', () => {
	render(<App/>)
});

test("Dashboard renders to the page", () => {
	const { getByText } = render(<Dashboard/>)
	getByText(/STRIKE/)
	getByText(/BALLS/)
	getByText(/FOULS/)
	getByText(/HITS/)

	getByText(/Play Ball/)

	getByText(/strike/)
	getByText(/balls/)
	getByText(/fouls/)
	getByText(/hits/)
})



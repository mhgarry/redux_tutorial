// Imports
import { describe, expect, it } from 'vitest';

// To Test
import App from '../App';

// Tests
describe('Renders main page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        render(<App />);
        const h1 = await screen.queryByText('Redux+React Blog');

        // Expectations
        expect(h1).not.toBeNull();
    });
});
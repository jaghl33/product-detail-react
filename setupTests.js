// setupTests.js

// Add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';

// Optional: Configure global settings for @testing-library/react
import { configure } from '@testing-library/react';

// Example: Disable automatic cleanup
// configure({ testIdAttribute: 'data-testid', autoCleanup: false });
configure({ testIdAttribute: 'data-testid' });


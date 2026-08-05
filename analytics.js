// Import and initialize Vercel Web Analytics
import { inject } from '@vercel/analytics';

// Initialize analytics
inject({
  mode: 'auto' // automatically detects development vs production
});

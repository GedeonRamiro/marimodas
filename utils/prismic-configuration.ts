import * as prismic from '@prismicio/client';

// Prismic API endpoint
export const apiEndpoint = String(process.env.NEXT_APP_API_URL);
// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = '';

// Client method to query Prismic
export const client = prismic.createClient(apiEndpoint, { accessToken });

// pages/api/auth/[...auth0].js
import { handleAuth } from '@auth0/nextjs-auth0';

// console.log('AUTH0_SECRET = ', process.env.AUTH0_SECRET)
console.log('the AUTH0_SECRET env var is set: ', !!process.env.AUTH0_SECRET);
export default handleAuth();


// where the .env is 
// /Users/kouglas/Desktop/All-Projects/verse-frontend-takehome-kouglas/.env.local
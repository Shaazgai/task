import { withAuth } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {},
  {
    callbacks: {
      //!!boolean hurwvvlj bgaa
      authorized: ({ token }) => !!token,
    },
    secret: process.env.NEXTAUTH_SECRET,
  }
);
//ymar url-eer orj ireh bol ene code ajillah we? user gdeg url-ees newtersen l bol en bol hereglegch.
export const config = { matcher: ['/user/:path*', '/api/user/:path*'] };

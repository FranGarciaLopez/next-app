This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Project was created in order to test new functionalities of Next 13 or +

### Next.js 13 New Functionalities

1. **Layouts**:
   - Easily share UI between routes.
   - Layouts preserve state, remain interactive, and avoid re-renders on navigation.
   - Define layouts through the file system.

2. **Server Components**:
   - Default to server-first for dynamic applications.
   - Support for async Server Components and extended fetch API for component-level data fetching.

3. **Streaming**:
   - Enables instant loading states.
   - Streams units of UI as they are rendered.

4. **Improved `next/image` Component**:
   - New Image component reduces layout shift and optimizes files on-demand.
   - Less client-side JavaScript.
   - Easier to style and configure.
   - More accessible with mandatory alt tags.
   - Aligns with the Web platform.
   - Faster due to native lazy loading without hydration.

5. **@next/font**:
   - New font system that automatically optimizes fonts, including custom ones.
   - Removes external network requests for better privacy and performance.
   - Built-in automatic self-hosting for any font file.
   - Zero layout shift using the CSS size-adjust property.

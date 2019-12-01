# bonus_nextjs

This here is basically a good template for a SSR ReactJS App. It lets us do 
pretty much everything that Rails's views can do.

We can consume an api for the Models and Controllers, or we can incorporate that 
functionality right in this server with a wee-more tinkering. This would be a 
good starting point for a blog or even an e-comerce app.

## SSR (NextJS) vs. CSR (CreateReactApp)

Some resources I've read about the advantages and disadvantages of each:

==> https://blog.logrocket.com/next-js-vs-create-react-app/
==> https://medium.appbase.io/part1-getting-started-with-react-and-nextjs-4f28a6a0c38e

What I've gathered so far: SSR is usually the best option, especially for 
gaining SEO notoriety and implementing analytics. It also depends on the purpose 
the app serves, and the experience we want out of it:
- an e-comerce app would benefit from ssr;
- a highly-interactive web app would benefit from csr;

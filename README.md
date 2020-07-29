# NEXT.JS

### INTRO

- use nvm or n to switch between node versions 😨😨
- think of React as a view library (i.e. you need a router, styling, build system) lot to do manually/decision making
- Next.js is like a framework framework LOL, app ready framework/fullstack framework
- Lets you build front-end applications and APIs and it uses React as its view library

### NEXT.JS
- several things you can get for free:
  - dev build system, routing, pre-rendering, API routes, production build system
- **Create react app**(CRA) is basically boilerplate (doesnt add any new functionality), takes a build system and manage it for you and you can build your app. It's just react no convetions/regular react still have to figure out things like routing.
- **What about gatsby?** more similar to Next.js than CRA. They're very similar. Gatsby has (stronger) conventions built into it i.e. data fetching (content mesh), a lot of overhead you need to know GraphQL to get the best of it. Also Gatsby doesn't have the ability to create API routes.

### WHEN TO USE NEXT.JS?
- Don't make a react app from scratch (takes forever, I know...) unless you use parcel 😅
- Do you only need a single page app? Then use **CRA** (no server-side rendering, api routes)
- Do you need a static site like a blog that's also a SPA? Use **Next.js or Gatsby**
- Need SSR (server-side rendering), an API, and all the above? Use **Next.js**
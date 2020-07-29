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

### SETUP
- We have several scripts that we need to declare in package.json: 
  - <code>next</code> Will start Next.js in dev mode with hot reloading.
  - <code>next build</code> Will build your project and ready it for production.
  - <code>next start</code> Will start your built app, used in production.

### ROUTING WITH NEXT.JS
- Don't need to interact with a router directly to create pages. Next.js has built on conventions to make creating routes as easy as creating a file. :D
- To get started create a directory called <code>/pages</code>. Next.js will associate any file in this directory as a route. The file names determine the route name or pattern.
- To create paths like <code>/project/settings</code> we can use folders in our <code>/pages</code> directory. For our note app we need the following routes:
  <code> index => /
  all notes => /notes
  one note => /notes/:id
  </code>
- We already create the index route so lets make a ntoes route 
  <code> pages
            notes
              index.jsx
  </code>
- By adding an <code>index</code> in a folder, we're telling Next.js that we want this component to be the **index route** for this path. So in this case, navigating to <code> /notes </code> will render <code> pages/notes/index.jsx</code>
  
#### DYNAMIC ROUTING
- Next.js makes it easy to create **dynamic routes**. Depending on if and how you want those pages to be **prerendered** will determine how you set them up. We're going to focus on creating dynamic routes that will not be built at build time but rather run time on the server.
- So to create a dynamic route, we can create a file that looks like this: <code>id.jsx</code>
- Where <code>id</code> is the name of the parameter. You can name it whatever you want. Those brackets are not a typoe or placeholder - that's the syntax to create dynamic route using file name conventions.
- We can access the <code>id</code> param inside our page component using <code>useRouter</code> hook from <code>next/route</code> module. This comes for free with Next.js :D
- The param name on the query object is the same name as the param name in the file for that page.

##### CATCH-ALL ROUTES
- There's a beautiful feature in Next.js that allows us to define catch-all routes for when we're too lazy to make a page for each one.
- -What's catch-all route? Think of a global. <code>this/folder/**</code>
- Where <code>**</code> means everything inside <code>folder</code>. We can do the same with our dynamic routes, all we need is to create a file in our pages directory like <code>docs/[...param].jsx</code>
- So the ellipsis <code>...</code> is used in this example to say that this file will represent and route that matches <code>/docs/a</code> or <code>docs/a/b</code> or <code>docs/a/b/c/d/a/b</code> - you get the point. You can then access all the params the same way you do with a single route param the only different is the value will be an array of the params in order.
- If you want to include the parent path in your catch-all route you can use an optional catch-all route <code>docs/[[...param]].jsx</code>
- Just add another set of <code>[]</code> over your catch-all and now in <code>/docs</code> will be matched with all of its children. The params value of the <code>router.query</code> for the parent path will just be an empty object <code> {} </code>
- When to use **catch-all routes?** **Useful when we have a bunch of pages that have pretty similar if not identical layouts and style but have different content and need their own URL** such things like docs or wikis are good examples

##### NON-PAGES
- Next.js has no conventions or opinions when we just need to use a component. The community usually creates a <code>/src/components</code> folder where all components live.

### NAVIGATION
- Next.js has a few tricks up its sleeve to help us navigate between pages

#### LINK COMPONENT
- Similar to an <code><a></code> tag, we can use <code>Link</code> component and then <code>next/link</code> module.



### STYLING
- When it comes to styling we can have **global styles** and **component styles**. For global CSS you have to import them at the entry point of your app. Where is the entrance for Next.js app? It's actually created for you but you can have to create your own now that you want global styles.
- The only way is a special page <code>pages/_app.jsx</code> (*note _ is reserved for hijacking the root*)
- We then have to add a special component (check _app.jsx for code)
- If you try to **import it anywhere else you will get a nice error telling you to put it into _app**

#### CSS MODULES
- All you have to do is add 'module' to the file name. i.e. style.css --> style.module.css

#### THEME.UI
- Create an object representing a theme and use that theme for all your components!
- A lot simpler to style than anything Scott has ever used :O
- Use <code> npm i theme-ui @theme-ui/presets --save</code> presets lets you use reset, tailwindcss whatever we want
- Theme.ui has a provider, every page in Next.js is it's own app/code splitting (for free!), every page we can use a provider but that's annoying 😅
- Instead we can use the theme in the app(root) to add providers 
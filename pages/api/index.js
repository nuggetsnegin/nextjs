// pages/api/data.js
// route => /api/data
// pages/api/data
import nc from 'next-connect';
import cors from 'cors'

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  // req and res is short for request/response
  .get((req, res) => {
    res.send('Hello world')
  })
  .post((req, res) => {
    res.json({ hello: 'world' })
  })
    //can do async stuff/promises etc :O 
  .put(async (req, res) => {
    res.end('hello')
  })
  
export default handler;

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

//injects the .env file for you
dotenvLoad()

//nextEnv plugin (creating it, with the env loaded into it), every variable with the value will be injected
const withNextEnv = nextEnv()
module.exports = withNextEnv()

module.exports = {
  webpack: {
    // webpack config properties
  },
  env: {
    MY_ENV_VAR: process.env.SECRET
  }
}

// import {PHASE_PRODUCTION_BUILD} from 'next/constants'
// /*can also use functions: */

// //default config is the default config that is made when you create a next.js app
// module.exports = (phase, { defaultConfig }) => {
//   //if im in the production build inside next.js run this code:
//   if (phase === PHASE_PRODUCTION_BUILD) {
    
//   }
// }
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
/** @jsx jsx */
/* what the heck is going on with jsx and then importing jsx?? */
/* this is what theme-ui does, it's jsx - javascript pragma, basically a hint or derective to tell the compiler (babel), 
 hey i'm going to let you know when you compile jsx I want you to use this jsx tool and not react */
 /* same with react and why we have to import react at the top of the file so babel will know how to compile,
 we arent using the react compiler but we are using the jsx compiler and it has the extra benefit of using the sx property - inline styles!*/
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>Note App</a>
      </Link>

      <Link href="/notes">
        <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
    </Link>
            
    <a sx={{
        color: 'text',
        fontSize: 3,
        cursor: 'pointer'
    }}
    href={process.env.HELP_APP_URL}
    >
    Help
    </a>

    </nav>
  </header>
)

export default Nav
/*this is telling next.js this route is going to have a parameter in it called 'id', i.e. it'll be /notes/id */
import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()
    /*object with any associated params, we want the id param because it's the file name!*/
    const { params } = router.query
    console.log(params)

    return (
        <h1>
            Note:{params}
        </h1>
    )
}


export default Page;


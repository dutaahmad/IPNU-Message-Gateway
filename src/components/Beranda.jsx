import axios from 'axios'
import { useEffect, useState } from 'react'
import { MemoizeSubmit } from "./reusable/Button"
import FormData from './reusable/Form'
import TextField from "./reusable/TextField"

const Home = () => {

    useEffect(
        () => {

        }, []
    )

    return (
        <div className='flex flex-col items-center my-[10%]'>
            <FormData />
            {/* <TextField content={text} />
            <MemoizeSubmit clicked={setSubmit} /> */}
        </div>
    )
}

export default Home
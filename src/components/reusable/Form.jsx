import axios from 'axios'
import { useState, } from 'react'
import instance from '../../api/api-service'
import { sendMessage, sendMessageJSON } from '../../api/content'


const FormData = () => {

    const [text, setText] = useState("")

    const handleInput = (event) => setText(
        event.target.value
    )

    const handleSubmit = (event) => {
        console.log(text)
        console.log(sendMessage(sendMessageJSON["message"] = text))
        event.preventDefault()
    }

    return (
        <form className='flex flex-col items-center gap-[2rem]' onSubmit={handleSubmit}>
            <textarea type="text"
                name="text"
                placeholder="Type here!"
                value={text}
                onChange={handleInput}
                className="rounded-md
                              h-[50vh]
                              w-[17rem]
                              text-justify
                              font-medium"
            >
            </textarea>
            <button
                className="
                         relative 
                         h-[4rem] 
                         w-[7rem] 
                         rounded-md 
                         bg-[#E0E4E7] 
                         shadow-button
                         "
                type='submit'>
                Submit
            </button>
        </form>
    )
}

export default FormData
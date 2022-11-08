import { memo } from "react"
import { HomeIcon } from '@heroicons/react/20/solid'

const HomeButton = (props) => {
  return (
    <>
      <button className="mx-auto 
                         my-[5%] 
                         relative 
                         h-[3rem] 
                         w-[6rem] 
                         rounded-md 
                         bg-[#E0E4E7] 
                         shadow-button
                         "
              onClick={props.clicked}>

        <HomeIcon className="h-[80%] w-[80%] m-auto" />
      
      </button>
    </>
  )
}

const Submit = (props) => {
  return (
    <>
      <button 
              className="mx-auto 
                         my-[5%] 
                         relative 
                         h-[4rem] 
                         w-[7rem] 
                         rounded-md 
                         bg-[#E0E4E7] 
                         shadow-button
                         "
              onClick = {props.clicked}>
        Submit
      </button>
    </>
  )
}

function SidebarToggle(props) {
  return (
    <>
      {/* {
            toggle ? null : <Sidebar/>
          } */}
      <button onClick={props.clicked}
        className="relative mx-auto h-[5rem] w-[5rem] rounded-full bg-[#E0E4E7] shadow-button">
        <img src="/ipnu.svg"
          className="
                          h-[4rem]
                          w-[4rem]
                          mx-auto
                          rounded-full
                          shadow-2xl
                          opacity-70
                          "
        />
      </button>
    </>
  )
}

export const MemoizeSidebarToggle = memo(SidebarToggle)
export const MemoizeSubmit = memo(Submit)
export const MemoizeHomeButton = memo(HomeButton)
import { memo } from "react"
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

const Submit = () => {
  return (
    <>
      <button className="mx-auto my-[5%] relative h-[4rem] w-[7rem] rounded-md bg-[#E0E4E7] shadow-button">
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
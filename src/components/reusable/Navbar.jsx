import { MemoizeSidebarToggle } from './Button'

export const Navbar = (props) => {

    return (
        <>
            <div className="
                            relative 
                            top-0
                            mx-auto
                            shadow-2xl 
                            h-[5rem]
                            bg-[#E0E4E7] 
                            flex w-[95%]
                            rounded-b-[2rem]
                            justify-evenly
                            flex-col
                            z-[3]
                            ">

                <MemoizeSidebarToggle clicked = {props.navClick} />

            </div>

        </>
    )
}
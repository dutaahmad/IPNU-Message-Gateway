import { useEffect, useState } from 'react'
import { menuContent } from '../../api/content'
import { iconLibrary } from '../../custom_lib/icons'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


export const Sidebar = (props) => {
    const [menuItems, setMenuItems] = useState([])

    useEffect(
        () => {
            menuContent().then(res => {
                setMenuItems(res.data)
            })
        }, []
    )

    let navigate = useNavigate();

    const routeChange = (label) => {
        
        if (label === "Tentang Kami") {
            navigate("/about");
        }
        navigate("/")
    }

    return (
        <>
            <motion.div
                initial={{ fillOpacity: 0, y: "-100" }}
                animate={{ fillOpacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="
            relative
            mx-auto
            top-[0rem]
            w-[95%]
            grid
            grid-cols-1
            z-[2]
            bg-[#E0E4E7]
            rounded-b-[3rem]
            shadow-menu
            ">

                {menuItems.map(
                    (item, i) => {
                        return (
                            <div className='relative
                              mx-[5%]
                              my-[2.75%]
                              h-[4rem]
                              w-full
                              rounded-[15px]
                              flex
                              flex-row'>

                                <button type='button'
                                    key={i}
                                    className="relative                                           
                                                h-[3.5rem] 
                                                w-[4rem] 
                                                rounded-lg 
                                                bg-[#E0E4E7]
                                                bg-opacity-100 
                                                shadow-button
                                                "
                                    onClick={routeChange(item.menu_label)}
                                                >
                                    {iconLibrary[item.icon]}
                                </button>

                                <div className="relative
                                                rounded-md
                                                mx-3
                                                h-[3.5rem]
                                                ">
                                    <p className="
                                                relative
                                                m-auto
                                                px-[50px]
                                                py-[0.75rem]
                                                basis-3/4
                                                text-xl
                                                text-left
                                                text-black
                                                z-1
                                                ">
                                        {item.menu_label}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                )}

            </motion.div>
        </>
    )
}
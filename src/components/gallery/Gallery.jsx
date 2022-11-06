import { useEffect, useState } from 'react'
import { imageContent } from '../../api/content'

export const AodGallery = (props) => {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        //   first
        imageContent().then(res => {
            setGallery(res.data)
        })
        return () => {
            // second
        }
    }, [])

    return (
        <>
            {gallery.map(
                (item, i) => {
                    return (
                        <div className="container py-[3vh] mx-auto items-center ">
                            <div className="w-full row-span-2 relative mx-auto">
                                <div className="
                                                flex
                                                flex-column
                                                mx-auto
                                                inset-0
                                                h-[10.85rem]
                                                sm:h-full
                                                w-[90%]
                                                rounded-xl
                                                opacity-75 
                                                hover:opacity-100
                                                bg-black
                                                shadow-2xl
                                                overflow-hidden">

                                    <img
                                        key={i}
                                        src={item.image_url}
                                        alt={item.image_label}
                                        className="
                                                    relative
                                                    w-full
                                                    object-scale-down 
                                                    object-center
                                                    "
                                    />
                                    <div className="absolute 
                                                    mx-auto
                                                    bottom-0
                                                    bg-[#E0E4E7] 
                                                    w-[80%]
                                                    h-8
                                                    shadow-md
                                                    rounded-lg
                                                    ">
                                        <h3 key={i}
                                            className="
                                                    relative 
                                                    text-xl 
                                                    text-slate-800 
                                                    text-center 
                                                    left-1/2 
                                                    top-1/2 
                                                    -translate-x-1/2 
                                                    -translate-y-1/2
                                                    ">{item.image_label}</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            )}

        </>
    )
}
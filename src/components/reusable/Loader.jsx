import "../../assets/loader.css"

const Loader = ({ when, children }) => {
    if (when) {
        return (
            <>
                <div className="
                                relative
                                w-[200px]
                                h-[60px]
                                z-[1]
                                m-auto
                                ">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                </div>
            </>
        )
    }
    return children
}

export default Loader;
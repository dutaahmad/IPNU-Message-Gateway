import { memo } from "react";
import "../../assets/loader.css"

const Loader = ({ when, children }) => {

    return (
        when ? (<>
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
        </>) : (
            children
        )
    );
}

const MemoLoader = memo(Loader);

export default MemoLoader;
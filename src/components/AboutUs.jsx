import { Link, useNavigate } from "react-router-dom";
import {MemoizeHomeButton} from "./reusable/Button"

const boxStyle = `
                    h-[9rem] 
                    w-[15rem] 
                    m-auto
                    my-[30%]
                    bg-[#E0E4E7]
                    shadow-button
                    rounded-2xl
                    flex
                    flex-col
                    `

const textStyle = `
                    m-auto
                    text-slate-800 
                    font-bold
                    text-3xl
                    `

export function About() {

  return (
    <div className={boxStyle}>
      <h2 className={textStyle}>
        ABOUT
      </h2>
    </div>
  );
}

export function NoMatch() {

  let navigate = useNavigate()
  
  return (
    <div className={boxStyle}>
      <h2 className={textStyle}>Nothing!</h2>
      <p className='m-auto font-mono font-medium text-slate-800'>
        {/* <Link to="/">Go to the home page</Link> */}
        <MemoizeHomeButton clicked={() => navigate(`/`)} />
      </p>
    </div>
  );
}

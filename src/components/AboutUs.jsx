import { Link } from 'react-router-dom'

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
    console.log("rendered")
    return (
      <div className={boxStyle}>
        <h2 className={textStyle}>
            ABOUT
        </h2>
      </div>
    );
  }

  export function NoMatch() {
    return (
      <div className={boxStyle}>
        <h2 className={textStyle}>Nothing!</h2>
        <p className='mx-auto font-mono font-medium text-slate-800'>
          {/* <Link to="/">Go to the home page</Link> */}
          <a href='localhost:3000'>Go to the home page</a>
        </p>
      </div>
    );
  }
  
import { useState, useCallback, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { Sidebar } from './components/reusable/Sidebar'
import { Navbar } from './components/reusable/Navbar'
import TextField from './components/reusable/TextField'
import { MemoizeSubmit } from './components/reusable/Button'
import Loader from './components/reusable/Loader'
import Home from './components/Beranda';
import { About } from './components/AboutUs';

function App() {
  const [showSidebar, setShowsidebar] = useState(false)
  const [loading, setLoading] = useState(false)

  const clickToggle = useCallback(
    () => {
      return setShowsidebar(props => !props)
    },
    [],
  )

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(
    () => {

      setLoading(true)

      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
        setLoading(false);
      };
    }, []
  )

  return (
    <div className="container 
                    mx-auto 
                    flex
                    flex-col
                    h-[100vh]
                    w-full
                    bg-[#E0E4E7]">
      <Navbar navClick={clickToggle} />
      {
        showSidebar ? (<Sidebar clickedClose={clickToggle} />)
          :
          (null)
      }
      <Loader when={loading}>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          
        </Routes>
      </Loader>

    </div>
  )
}

export default App

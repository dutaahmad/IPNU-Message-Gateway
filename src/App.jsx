import { useState, useCallback, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { Sidebar } from './components/reusable/Sidebar'
import { Navbar } from './components/reusable/Navbar'
import { menuContent } from './api/content'
import MemoLoader from './components/reusable/Loader'
import Home from './components/Beranda';
import { About, NoMatch } from './components/AboutUs';

function App() {
  const [showSidebar, setShowsidebar] = useState(false)
  const [loading, setLoading] = useState(true)

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

      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => {
        clearTimeout(timeout);
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
      <MemoLoader when={loading}>
        <Routes>
          <Route path="/" element={<Home startLoading={startLoading} stopLoading={stopLoading} />} />
          <Route path="/about" element={<About startLoading={startLoading} stopLoading={stopLoading} />} />
          <Route path="*" element={<NoMatch />} startLoading={startLoading} stopLoading={stopLoading} />
        </Routes>
      </MemoLoader>

    </div>
  )
}

export default App

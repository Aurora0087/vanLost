import { useState } from 'react'
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom'
import './App.css'
import vanlogo from './assets/VANLIFE.svg'
import Home from './container/Home';
import About from './container/About';

function App() {
  const [selectedLink, setSelectedLink] = useState("");

    const handleLinkClick = (link: string) => {
      setSelectedLink(link);
    };

  return (
    <>
      <BrowserRouter>
      <div className="container">
            <header>
                <Link to={"/"}
                aria-selected={selectedLink === "/" ? 'true' : 'false'}
                  onClick={() => handleLinkClick("/")}
                >
                    <div className="logo">
                        <img src={vanlogo} alt="#VANELIFE" />
                    </div>
                </Link>
                <nav>
                    <Link to={"/about"}
                    aria-selected={selectedLink === "about" ? 'true' : 'false'}
                    onClick={() => handleLinkClick("about")}
                    >
                      About</Link>
                    <Link to={"/vans"}
                    aria-selected={selectedLink === "vans" ? 'true' : 'false'}
                    onClick={() => handleLinkClick("vans")}
                    >
                      Vans
                    </Link>
                </nav>
            </header>
            <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
            </Routes>
            </main>
            <footer>
                <p>&#169; 2023#VANLIFE</p>
            </footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

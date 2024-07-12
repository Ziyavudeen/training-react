import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header1">
        <div className="drop">
            <a href="index.html">Find Designers</a>
            <div className="drop-con">
                <ul>
                    <li  id="li1"><a href="find.html">Designer Search</a></li>
                    <li id="li1"><a href="#">Post a Job</a></li>
                </ul>
            </div>
        </div>
        <div className="topi">
            <a href="ins.html">Inspiration</a>
        </div>
        <div className="drop">
            <a href="index.html">Course</a>
            <div className="drop-con">
                <ul>
                    <li id="li1"><a href="ux.html">UX diplomo</a></li>
                    <li id="li1"><a href="#">UI certificate</a></li>
                </ul>
            </div>
        </div>
        <div className="topi">
            <a href="job.html">Job</a>
            <a href="job.html">Go Pro</a>
        </div>
        <div className="logo">
            <h1 id="logo">Dribble</h1>
        </div>
        <div className="box">
            <input id="box" type="text" placeholder="Search..." />
        </div>
        <div className="img">
            <img id="img1" src="image/Fafa.jpg" /> 
        </div>
    </header>
    <div>
        <div className="pad">
            <p id="p1">Over 3 million ready-to-work creatives!</p>
        </div>
        <div className="ch1">
            <p id="p2">The world's destination<br />&emsp;&emsp;&emsp;for design</p>
        </div>
        <div className="ch2">
            <p id="p3">Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
        </div>
        <div className="bu1">
            <button id="bu1">Get started</button>
        </div>
        <div className="scroll">
            <img id="img2" src="image/scr1.jpg" alt="sr1" />
            <img id="img2" src="image/scr2.jpg" alt="sr2" />
            <img id="img2" src="image/scr3.png" alt="sr3" />
            <img id="img2" src="image/scr4.jpg" alt="sr4" />
            <img id="img2" src="image/scr5.jpg" alt="sr5" />
        </div>
        <div className="bh1">
            <p id="p4">Explore inspiring designs</p>
        </div>
        <div className="imag1">
            <img id="img3" src="image/im1.jpg" alt="img1" />
            <img id="img3" src="image/im2.png" alt="img2" />
            <img id="img3" src="image/im3.jpg" alt="img3" />
            <img id="img3" src="image/im4.png" alt="img4" />
        </div>
        <div className="imag2">
            <img id="img4" src="image/im5.png" alt="img5" />
            <img id="img4" src="image/im6.png" alt="img6" />
            <img id="img4" src="image/im7.jpg" alt="img7" />
            <img id="img4" src="image/im8.jpg" alt="img8" />
        </div>
        <div className="imag3">
            <img id="img5" src="image/im9.jpg" alt="img9" />
            <img id="img5" src="image/im10.png" alt="img10" />
            <img id="img5" src="image/im12.jpg" alt="img12" />
            <img id="img5" src="image/im13.jpg" alt="img13" />
        </div>
        <div className="imag4">
            <img id="img6" src="image/im14.jpg" alt="img14" />
            <img id="img6" src="image/im15.jpg" alt="img15" />
            <img id="img6" src="image/im16.jpg" alt="img16" />
            <img id="img6" src="image/im17.png" alt="img17" />
        </div>
        <div className="imag5">
            <img id="img7" src="image/im18.jpg" alt="img18" />
            <img id="img7" src="image/im19.png" alt="img19" />
            <img id="img7" src="image/im20.png" alt="img20" />
            <img id="img7" src="image/im11.jpg" alt="img11" />
        </div>
        <div className="bu2">
            <button id="bu2">Browse more inspiration</button>
        </div>
    </div>
    <footer className="footer">
        <div className="h2">
            <p id="topi2">Find your next <br />designer today</p>
            <p id="topi3">The world’s leading brands use Dribbble to hire creative talent. <br />&emsp;Browse millions of top-rated portfolios to find your perfect<br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; creative match.</p>
        </div>
        <div className="bu3">
            <button id="bu3">Get started now</button>
            <button id="bu4">Learni about hiring</button>
        </div>
    </footer>
    </>
  )
}

export default App

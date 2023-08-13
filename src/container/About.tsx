import topimg from '../assets/image54.png'
import '../css/about.css'

function About() {
    return <>
                <div className="top-img">
                    <img src={topimg} alt="" />
                </div>
                <div className="cont">
                    <div className="t">
                        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    </div>
                    <div className="des">
                        <p>
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
                        </p>
                        <p>
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                        </p>
                    </div>
                    <div className="box">
                        <div className='tital'>
                            <h2>Your destination is waiting. Your van is ready.</h2>
                        </div>
                        <button>Explore our vans</button>
                    </div>
                </div>
    </>
}

export default About
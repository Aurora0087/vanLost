import React from "react"
import { Link } from 'react-router-dom'
import '../css/vans.css'

function Vans() {
    const [vans, setvans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setvans(data.vans))
    }, [])
    
    const vanElement = vans.map(van => (
        <div key={van['id']} className="van-title">
            <Link to={"/vans/"+ van['id']}>
            <img src={van['imageUrl']} alt="" />
            <div className="van-info">
                <h2>{van['name']}</h2>
                <p>${van['price']}<span>/day</span></p>
            </div>
            <i className={`van-type ${van['type']} selected`}>{van['type']}</i>
            </Link >
        </div>
    ))

    return <>
        <div className="vans">
            <div className="vans-nav">
                <h1>Explore our van options.</h1>
                <nav>
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                </nav>
            </div>
            <div className="vans-list">
                {vanElement}
            </div>
        </div>
    </>
}

export default Vans
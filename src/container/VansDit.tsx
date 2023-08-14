import React from "react"
import { useParams, Link } from "react-router-dom"
import '../css/vandit.css'

function VansDit() {
    const params = useParams()
    console.log(params)

    const [vanDit, setvanDit] = React.useState(null)
    React.useState(() => {
        fetch('/api/vans/'+params.id)
        .then(res => res.json())
            .then(data => setvanDit(data.vans))
    })

    return (
        <>
            {vanDit ?(
        <div className="van">
                <div className="back">
                    <Link to={'/vans'}>&#8592; Back to all Vans</Link>
                </div>
                <div className="van-dit">
                    <img src={vanDit['imageUrl']} alt="vanImg" />
                    
                    <div className="van-info">
                        <span
                            className={`van-type ${vanDit['type']} selected`}>
                            {vanDit['type']}
                        </span>
                        <h2>{vanDit['name']}</h2>
                        <p>${vanDit['price']}<span>/day</span></p>
                        <p>{vanDit['description']}</p>
                    </div>
                    <div>
                        <button>
                            Rent this Van Now
                        </button>
                </div>
                </div>
                
                </div>
            ) : <h2>Loading...</h2>}
        </>
    )
}

export default VansDit
import React from 'react'
import EarRingsData from '../Json data/Fashion/EarRingsData'
export default function EarRings({addToCart}) {
  return (
    <div className="container">
    <div className="row">
      {EarRingsData.map((data) => (
        <div className="col-sm-4 my-3">
          <div className="card text-center">
            <img src={data.Image} className="card-img-top" height="450px" />
            <div className="card-body">
              <h3 className="card-title my-3">{data.Name}</h3>
              <p className="card-text h4 my-3">
                <span className="text-danger">Price :- </span>
                {data.Price} ₹
              </p>
              <button className="btn btn-warning" onClick={()=>addToCart(data)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

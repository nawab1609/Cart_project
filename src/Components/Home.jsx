import React from "react";
import headPhone from "../Images/Carousel/headphones.jpg";
import Bag from "../Images/Carousel/Bag.jpg";
import EarRing from "../Images/Carousel/Earring.jpg";
import Ring from "../Images/Carousel/Ring.jpg";
import Rolex from "../Images/Carousel/Rolex.jpg";
import SmartWatch from "../Images/Carousel/SmartWatch.jpg";
import FerreroRocher from "../Images/Carousel/FerreroRocher.jpg";
import Nike from "../Images/Carousel/Nike.jpg";

import data from "../Json data/MainData";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Carousel  */}

      <div id="demo" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="3"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="4"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="5"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="6"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="7"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={headPhone} alt="error" class="d-block w-100 mycarousel"  />
          </div>
          <div class="carousel-item">
            <img src={Bag} alt="error" class="d-block w-100 mycarousel"  />
          </div>
          <div class="carousel-item">
            <img src={Nike} alt="error" class="d-block w-100 mycarousel"  />
          </div>
          <div class="carousel-item">
            <img src={SmartWatch} alt="error" class="d-block w-100 mycarousel"  />
          </div>
          <div class="carousel-item">
            <img src={Rolex} alt="error" class="d-block w-100 mycarousel"  />
          </div>
          <div class="carousel-item">
            <img src={EarRing} alt="error" class="d-block w-100 mycarousel"  />
          </div>
          <div class="carousel-item">
            <img src={Ring} alt="error" class="d-block w-100 mycarousel"  />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="text-center my-5">Our products</h1>
          {data.map((data) => (
            <div className="col-sm-4 my-3">
              <Link to={data.Path} className="nav-link">
              <div className="card text-center">
                <img src={data.Image} className="card-img-top" height="400px" />
                <div className="card-body">
                  <h3 className="card-title my-3">{data.Title}</h3>
                </div>
              </div>
           </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

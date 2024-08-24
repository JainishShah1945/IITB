import React from "react";
import Study from "../../Assests/Course.jpg";

function Home() {
  return (
    <div className="container main h-100">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
          <img className="w-75 mt-5 ms-5" src={Study}></img>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 ">
          <p className="fs-1 mt-5 text-white">
            Give a boost to your career by enjoying Splash Courses
          </p>
          <p className="fs-4 mt-5" style={{ color: "#000000" }}>
            At Splash, we offer a diverse range of programs designed to
            challenge and inspire students, helping them achieve their full
            potential and prepare for a successful future. Join us in our
            mission to shape tomorrow’s leaders with knowledge, integrity, and
            innovation.
          </p>
        </div>
      </div>
      <hr className="mt-5" />
      <div
        id="carouselExampleCaptions"
        class="carousel slide mb-5"
        data-bs-ride="carousel"
        style={{ width: "98%", maxWidth: "98%", backgroundColor: "white" }}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div className="fs-3 car1">
              RakshaBandan Special Offer <br></br>
              50% off on all courses
            </div>
          </div>
          <div class="carousel-item">
            <div className="car2 fs-3">
              Special Lectures On React.js
              <br /> From Shraddha khapra.
              <br />
              Enroll Now!
            </div>
          </div>
          <div class="carousel-item ">
            <div className="fs-3 car3">
              <p className=""> Start a Quizzz and test your skills</p>

              <button className="">Start Now</button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;

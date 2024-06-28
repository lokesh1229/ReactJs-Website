import React from 'react'

function Home() {
  return (
    <div>
      <div className="container mt-5">
    <div className="carousel carousel slide" id="myCarousel" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div class="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
                <img alt='' height="100%" src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5ecf4f27ed5376ef.jpg?q=20" class="d-block w-100" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img alt='' src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/68959fd7d83448b8.png?q=20" class="d-block w-100" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
                <img alt='' src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/59b4f0a4692fc280.png?q=20" class="d-block w-100" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
    </div>
</div>

    </div>
  )
}

export default Home;

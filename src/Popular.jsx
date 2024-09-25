import React from 'react'

const Popular = () => {
  return (
    <section className="popular" id="destination">
        <div className="container">

          <p className="section-subtitle">Uncover place</p>

          <h2 className="h2 section-title">Popular destination</h2>

          <p className="section-text">
          Explore India's rich spiritual heritage through its most revered pilgrimage sites, where devotion and tradition come together.
          </p>

          <ul className="popular-list">

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="kedarnath.jpg" alt="Kedarnath, Uttrakhand" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Uttrakhand</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Kedarnath Temple</a>
                  </h3>

                  <p className="card-text">
                  Kedarnath Temple is a sacred Hindu shrine for Lord Shiva.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="ramMandir.jpg" alt="Ram Mandir" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Ayodhya</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Ram Mandir</a>
                  </h3>

                  <p className="card-text">
                  Kedarnath Temple is a sacred Hindu shrine for Lord Rama.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="vrindavan.jpeg" alt="Vrindavan" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Vrindavan</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Prem Mandir</a>
                  </h3>

                  <p className="card-text">
                  Prem Mandir is a stunning temple dedicated to Lord Krishna.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <button className="btn btn-primary">More destintion</button>

        </div>
      </section>
  )
}

export default Popular

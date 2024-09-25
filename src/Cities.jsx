import React from 'react'

const Cities = () => {
  return (
    <section className="package" id="package">
        <div className="container">

          <p className="section-subtitle">Cities</p>

          <h2 className="h2 section-title">Popular Cities</h2>

          <p className="section-text">
          Experience the diverse cultures and rich heritage of these popular cities, where every street and corner tells a story of faith and devotion.
          </p>

          <ul className="package-list">




            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="varanasi.jpg" alt="Experience The Great Holiday On Beach" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Varanasi</h3>

                  <p className="card-text">
                  Situated on the banks of River Ganga in Uttar Pradesh, Varanasi is considered as one of the holiest cities, drawing tourists who seek spiritual awareness and liberation.
                  </p>

                  <ul className="card-meta-list">

                

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Uttar Pradesh</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(25 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                  OCT-MAR
                    <span>Peak Season</span>
                  </p>

                  <button className="btn btn-secondary">Explore</button>

                </div>

              </div>
            </li>


            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="amritsar.jpg" alt="Experience The Great Holiday On Beach" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Amritsar</h3>

                  <p className="card-text">
                  Home to the legendary Sikh shrine Golden Temple, Amritsar is fondly called Ambarsar and will steal your heart with its colourful bazaars, lip-smacking street food, shopping hubs and historical monuments.
                  </p>

                  <ul className="card-meta-list">

                

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Punjab</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(20 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                  OCT-MAR
                    <span>Peak Season</span>
                  </p>

                  <button className="btn btn-secondary">Explore</button>

                </div>

              </div>
            </li>


             <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="dwarka.jpg" alt="Experience The Great Holiday On Beach" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Dwarka</h3>

                  <p className="card-text">
                  An ancient and prosperous city believed to have been the capital of Lord Krishna's kingdom, Dwarka is an important pilgrimage centre for Hindus from all over the world. It is located on the western coast of Gujarat, on the banks of River Gomti.
                  </p>

                  <ul className="card-meta-list">

                

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Gujrat</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(30 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                  NOV-FEB
                    <span>Peak Season</span>
                  </p>

                  <button className="btn btn-secondary">Explore</button>

                </div>

              </div>
            </li>

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="tirupati.jpg" alt="Experience The Great Holiday On Beach" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Tirupati</h3>

                  <p className="card-text">
                  Tirupati is home to the sacred Sri Venkateswara temple, sitting atop the beautiful Tirumala Hills, and thus considered as an epicenter of spiritual devotion.
                  </p>

                  <ul className="card-meta-list">

                

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Andra Pradesh</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(24 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                  NOV-FEB
                    <span>Peak Season</span>
                  </p>

                  <button className="btn btn-secondary">Explore</button>

                </div>

              </div>
            </li>


    </ul>




          <button className="btn btn-primary">View All Cities</button>

        </div>
      </section>
  )
}

export default Cities

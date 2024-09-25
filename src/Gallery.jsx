import React from 'react'

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
        <div className="container">

          <p className="section-subtitle">Photo Gallery</p>

          <h2 className="h2 section-title">Photo's From Travellers</h2>

          <p className="section-text">
          Experience the beauty of our sacred destinations through the eyes of fellow travelers, capturing moments of devotion and discovery.
          </p>

          <ul className="gallery-list">

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="gallery-1.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="gallery-2.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="gallery-3.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="gallery-4.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="gallery-5.jpg" alt="Gallery image" />
              </figure>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Gallery

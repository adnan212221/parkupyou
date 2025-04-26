import React from 'react'
import parking from '../assets/parking.png'
import './services.scss'
import KeyFeatures from './KeyFeatures'
import automatic from '../assets/automatic.png'
import BoomBarrierFeatures from './BoomBarrierFeatures'

const Services = () => {
  return (
    <>
    <section className="parking-guidance py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="title">
            Discover Our Top Parking <span className="highlight">Services</span>
          </h2>
          <p className="subtitle">
            Enjoy effortless parking with NeoPark most popular services.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Text */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="section-heading">
              Parking Guidance System (PGS)
            </h3>
            <p className="description">
              PGS stands for Parking Guidance System. It is an intelligent system designed to help drivers find available parking spaces quickly and efficiently, reducing congestion and improving the overall parking experience.
            </p>
            <p className="description">
              PGS is commonly used in malls, airports, commercial complexes, and smart city projects to improve parking efficiency and reduce traffic congestion.
            </p>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <div className="image-wrapper">
              <img
                src={parking}
                alt="Parking Guidance System"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <KeyFeatures />

    <section className="boom-barrier py-5">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h2 className="title mb-4">
              Automatic <span className="highlight">Boom Barrier</span>
            </h2>
            <p className="description">
              An Automatic Boom Barrier is a motorized gate control system used to regulate vehicle entry and exit in parking lots, toll booths, and restricted areas. It can be integrated into your Parking Guidance System (PGS) to enhance efficiency and security.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img src={automatic} alt="Boom Barrier" className="img-fluid custom-img" />
          </div>

        </div>
      </div>
    </section>
    <BoomBarrierFeatures />
    </>
  )
}

export default Services
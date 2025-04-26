import React from 'react';
import './KeyFeatures.scss'; // Import SCSS

const features = [
  {
    title: "Real-Time Space Availability",
    description: "Uses sensors or cameras to detect vacant spots and display availability on digital signboards or mobile apps."
  },
  {
    title: "Stress-Free Parking",
    description: "Simplifies the parking experience, ensuring a smooth and hassle-free process."
  },
  {
    title: "Efficient Use of Parking Space",
    description: "Maximizes available parking spaces, improving space utilization."
  },
  {
    title: "Vehicle Search Kiosk",
    description: "Easily locate your parked vehicle with our intuitive search kiosk feature."
  },
  {
    title: "Ease of Payment Through App",
    description: "Convenient and secure payment options available directly through our user-friendly app."
  },
  {
    title: "Booking and Payments via App",
    description: "Simplify payments with App, making parking even more accessible and convenient."
  },
  {
    title: "Mobile App Integration",
    description: "Allows users to check availability, reserve spots, and make digital payments."
  }
];

const KeyFeatures = () => {
  return (
    <section className="key-features py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          Key Features of a <span className="highlight">PGS System</span>:
        </h2>

        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
              <div className="feature-box p-4 text-center">
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  );
};

export default KeyFeatures;

import React from 'react';
import './BoomBarrierFeatures.scss';

const features = [
  {
    title: 'Automated Operation',
    description: 'Opens and closes automatically using sensors, RFID, ANPR (Automatic Number Plate Recognition), or remote controls.'
  },
  {
    title: 'Access Control Integration',
    description: 'Works with ticketing systems, QR codes, RFID tags, or smart cards for seamless access.'
  },
  {
    title: 'Fast & Efficient',
    description: 'Reduces waiting time at entry and exit points.'
  },
  {
    title: 'Security Enhancement',
    description: 'Prevents unauthorized vehicles from entering restricted areas.'
  },
  {
    title: 'Emergency Mode:',
    description: 'Can be manually operated during power failures or emergencies.'
  }
];

const BoomBarrierFeatures = () => {
  return (
    <section className="boom-barrier-features py-5">
      <div className="container">
        <h2 className="text-center title mb-5">Key Features of Automatic Boom Barrier:</h2>
        <div className="row justify-content-center">

          {features.map((feature, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4 d-flex">
              <div className="feature-card p-4 w-100">
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

export default BoomBarrierFeatures;

import React from 'react';
import Tilt from 'react-parallax-tilt';

const ParallaxEffectImg = () => (
  <Tilt
    className="parallax-effect-img"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
    <img
      src="https://picsum.photos/400/300"
      className="inner-element"
      alt="Random placeholder image"
    />
  </Tilt>
);

export default ParallaxEffectImg;

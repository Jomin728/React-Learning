
import React from 'react'
import Hero from '@/components/Hero';
import scaleImage from "public/scale.jpg"

const ScalePage = () => {
    return (
        <Hero imgData={scaleImage} imgAlt="welding" title="Scale your App to Infinity" />
      );
}

export default ScalePage
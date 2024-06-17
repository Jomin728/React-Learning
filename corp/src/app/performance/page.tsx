
import React from 'react'
import Hero from '@/components/Hero';
import performaceImage from "public/performance.jpg"
const PerformancePage = () => {
    return (
        <Hero imgData={performaceImage} imgAlt="welding" title="We serve high performance applications" />
      );
}

export default PerformancePage
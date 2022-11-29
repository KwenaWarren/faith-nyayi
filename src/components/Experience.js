import React from 'react';
import { motion } from 'framer-motion'
import Line from './LineGradient/Line'
import TestiSlider from './TestiSlider';

const Services = () => {
  return (
    

<div name="Experience" className="flex flex-col w-full h-full text-black">
<div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
  <div className="pb-8">
  <motion.div
  className="md:w-11/12 text-center md:text-left"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }}
>
    <p className="text-5xl text-center font-bold mb-5 mt-16">
      Experience
    </p>
    <Line width="mx-auto w-2/5" />
    </motion.div>
  </div>
  <div className='container mx-auto'>
  <div className='flex flex-col items-center text-center'>
  <h2 className='text-2xl'>CAREER HIGHLIGHTS</h2>
        <div className='my-1'> 
        <p>Transitioned the company from level 7 BBBEE rating to Level 4,
            generating more revenue for the organisation as 65% of revenue
            comes from tenders.</p>
        <p>Introduced the first wholsale and retail learnership for
            unemployed youths and acquired 100% completion rate.</p>
        <p>Established an accredited trade test center and generated
            more than 45 qualified artisans. Executed the 70-20-10
            learning model that significantly reduced the company's call
            out rate.</p>
        <p>Passionate about community upliftment, driving career development
            and growth by coaching diverse young leaders through involvement as
            Director/Volunteer of an organisation, dealing with developing kids
            in technology and engineering, developing women in the hyiegen sector,
            transforming the lift and elevetor industry through a consortium of 
            independent lift companies and developing young people and women in the
            Nuclear Energy fields.
             </p>
        </div>
  </div>
  <TestiSlider />
</div>

</div>
</div>
  );
};

export default Services;

import React from 'react'
import { motion } from 'framer-motion'
import Line from './LineGradient/Line'
import TestiSlider from './TestiSlider'

const Skills = () => {
  return (
    <section name="Skills" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col px-8">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
             Core Competencies
          </h2>
          <br />
          <ul>
            <li>Learning and Organizational Development</li>
            <li>BBBEE Regulations/ Skills Development Legilation</li>
            <li>Coaching & Mentoring| Inspiring Teams</li>
            <li>Capability Development Strategy Formulation</li>
            <li>Skills Development Facilitation</li>
            <li>Leadership & Success Planning</li>
            <li>Graduate Recruitment Program Execution </li>
            <li>Training Programme Implementation</li>
            <li>Project/ Programme Management</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Skills

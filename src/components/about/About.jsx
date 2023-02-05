import React from 'react'
import "./about.css"
import ME from "../../assets/me.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small></small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>SoyHenry</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
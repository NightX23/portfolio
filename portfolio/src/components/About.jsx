import React from 'react';
import img from '../images/about.png';

function About() {
  return (
    <section id='about' className='pt-10'>
      <div className='section-container'>
        <div id='about-content' className='about-content'>
          <div id='img-side'>
            <img src={img} width='410' height='350' />
          </div>
          <div id='text-side'>
            <h3 className='section-title'>About me</h3>
            <h4 className='section-subtitle'>
              A dedicated Web Developer based in Dominican Republic
            </h4>
            <p>
              As a Software Developer and in addition to my technical skills, I
              work with a collaborative and results-oriented approach. I am
              passionate about learning new things and improving my skills, for
              that I seek to share my experience and knowledge in a way that
              they are useful in the projects I participate in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

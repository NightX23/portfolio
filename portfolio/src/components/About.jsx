import React from 'react';
import img from '../images/about.png';

function About({ content }) {
  return (
    <section id='about' className='pt-10'>
      <div className='section-container'>
        <div id='about-content' className='about-content'>
          <div id='img-side'>
            <img src={img} width='410' height='350' />
          </div>
          <div id='text-side'>
            <h3 className='section-title'>{content?.title}</h3>
            <h4 className='section-subtitle'>{content?.subtitle}</h4>
            <p>{content?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

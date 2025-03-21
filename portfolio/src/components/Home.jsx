import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiCss3,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import profile from '../images/profile1.png';

function Home() {
  return (
    <section id='home' className=''>
      <div className='flex container justify-center items-center content-center px-0 mt-20 my-0 py-0  max-w-[107rem] relative mx-auto'>
        <div className='relative mx-0'>
          <div id='profile-main' className='profile-main'>
            <img src={profile} alt='' width='384' height='384' />
            <div
              id='profile-info'
              className='flex flex-col basis-1/2 max-w-3xl '
            >
              <h1 className='text-black-500 text-7xl font-bold my-8'>
                Full-Stack Web Developer
              </h1>
              <p className='block text-[1.8rem] leading-relaxed'>
                Hi, I'm Marlon Peña. A passionate Web Developer based in Santo
                Domingo, Dominican Republic. 📍
              </p>
              <span className='flex gap-5 my-10 cursor-pointer justify-center md:justify-start'>
                <a
                  className='text-5xl'
                  aria-label='linkedin'
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.linkedin.com/in/marlon-pena/'
                >
                  {' '}
                  <AiFillLinkedin />{' '}
                </a>
                <a
                  className='text-5xl'
                  aria-label='github'
                  rel='noreferrer'
                  target='_blank'
                  href='https://github.com/NightX23'
                >
                  <AiFillGithub />
                </a>
              </span>
            </div>
          </div>

          <div id='skills' className='skill-div'>
            <p className='skills-text'>Tech Stack</p>
            <div id='logos'>
              <ul className='skills-list'>
                <li className='skill'>
                  <SiHtml5 />
                </li>
                <li className='skill'>
                  <span title='testing'>
                    <SiJavascript className='cursor-pointer' />
                  </span>
                </li>
                <li className='skill'>
                  <SiCss3 />
                </li>
                <li className='skill'>
                  <DiVisualstudio />
                </li>
                <li className='skill'>
                  <SiReact />
                </li>
                <li className='skill'>
                  <SiTailwindcss />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

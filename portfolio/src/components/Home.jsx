import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiCss3,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import profile from '../images/profile1.png';
import SocialLinks from './Social/SocialLinks';

function Home({ content }) {
  return (
    <section id='home'>
      <div className='section-container max-w-[107rem] relative'>
        <div className='relative'>
          <div id='profile-main' className='profile-main'>
            <img src={profile} alt='Profile picture' width='384' height='384' />
            <div
              id='profile-info'
              className='flex flex-col max-w-3xl basis-1/2  '
            >
              <h1 className='my-8 text-7xl font-bold'>{content?.title}</h1>
              <p className='block text-[1.8rem] leading-relaxed'>
                {content?.description} 📍
              </p>
              <div className='my-10'>
                <SocialLinks alignment='justify-center md:justify-start' />
              </div>
            </div>
          </div>

          <div id='skills' className='skill-div'>
            <p className='skills-text'>{content?.subtitle}</p>
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

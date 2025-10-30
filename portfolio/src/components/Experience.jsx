import React, { useEffect, useState } from 'react';
import ExperienceCard from './work-experience/ExperienceCard';

const mockExperienceData = {
  experience: [
    {
      id: 'exp_01',
      start: '2024',
      end: '-1',
      position: 'Full-Stack Software Engineer',
      company: 'XpertCode',
      employmentType: 'Full-Time',
      website: 'https://xpertcode.com.do',
      workMode: 'Remote',
      description:
        'Contractor Software Engineer at Claro RD. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isCurrentJob: true,
    },
  ],
};

function Experience({ content }) {
  const [workExperienceList, setWorkExperienceList] = useState(
    mockExperienceData.experience
  );
  // useEffect(() => {}, []);
  return (
    <section id='experience'>
      <div className='section-container flex-col'>
        <h3 className='section-title md:text-left  w-full'>{content?.title}</h3>
        <div className='mt-4'>
          {workExperienceList.map((workExperience) => (
            <ExperienceCard
              key={workExperience.id}
              workExperience={workExperience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

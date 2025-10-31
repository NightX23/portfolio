import React from 'react';
import ExperienceCard from './work-experience/ExperienceCard';
import useFirebase from '../hooks/FirebaseDataHooks.js';

function Experience({ content }) {
  const {
    items,
    loading: _loading,
    error: _error,
  } = useFirebase().getWorkExperienceData;

  const experienceData = items?.en;

  if (_loading) return <div className='loading'>Loading...</div>;

  return (
    <section id='experience'>
      <div className='section-container flex-col'>
        <h3 className='section-title '>{content?.title}</h3>
        <div className='mt-4 '>
          {experienceData ? (
            Object.values(experienceData).map((workExperience) => (
              <ExperienceCard
                key={workExperience.id}
                workExperience={workExperience}
              />
            ))
          ) : (
            <div className='text-sm text-gray-500'>Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;

import React from 'react';
import { LuExternalLink } from 'react-icons/lu';

function ExperienceCard({ workExperience }) {
  const yearRange = workExperience.isCurrentJob
    ? `${workExperience.start} - Present`
    : `${workExperience.start} - ${workExperience.end}`;

  return (
    <div className='mb-8 last:mb-0'>
      <div className='flex flex-col md:flex-row md:gap-8'>
        <div className='text-gray-400 text-sm md:text-base mb-2 md:mb-0 md:w-32 flex-shrink-0'>
          {yearRange}
        </div>

        <div className='flex-1'>
          <h3 className='text-lg md:text-xl font-semibold mb-1'>
            {workExperience.position}
          </h3>
          <p className='text-gray-400 text-sm md:text-base mb-3'>
            {workExperience.website ? (
              <a
                href={workExperience.website}
                target='_blank'
                rel='noopener noreferrer'
                className='inline text-inherit'
              >
                {workExperience.company}
                <LuExternalLink className='inline-block align-text-bottom ml-1' />
              </a>
            ) : (
              workExperience.company
            )}
            <span className='mx-2'>•</span>
            {workExperience.employmentType}
            <span className='mx-2'>•</span>
            {workExperience.workMode}
          </p>
          <p className='text-black-300 text-sm md:text-base mb-3'>
            {workExperience.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;

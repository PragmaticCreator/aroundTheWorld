import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ flag, name, population, region, capital }) => {
  return (
    <div className='bg-primary-light dark:bg-primary-dark shadow-md rounded-md flex flex-col w-[260px] h-[300px] cursor-pointer'>
      <div
        style={{ backgroundImage: `url("${flag}")` }}
        className={`bg-center bg-cover bg-no-repeat h-[130px] w-full rounded-t-md`}
      />
      <div className='text-left p-6 text-sm'>
        <h3 className='text-lg font-extrabold mb-3'>{name}</h3>
        <p className='font-semibold'>
          Population:{' '}
          <span className='font-light'>
            {population.toLocaleString('en-US')}
          </span>
        </p>
        <p className='font-semibold mt-1'>
          Region: <span className='font-light'>{region}</span>
        </p>
        <p className='font-semibold mt-1'>
          Capital: <span className='font-light'>{capital}</span>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
};

export default Card;

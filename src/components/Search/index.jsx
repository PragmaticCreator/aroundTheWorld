import React from 'react';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';

const Search = ({ className, input }) => {
  return (
    <div className={`${className} relative w-full`}>
      <BiSearch
        fontSize={18}
        className='absolute left-7 top-4 text-secondary-light dark:text-primary-light'
      />
      <input
        type='search'
        placeholder='Search for a country...'
        className='bg-primary-light dark:bg-primary-dark rounded-md pr-5 pl-16 py-3 w-full md:w-[480px] placeholder:dark:text-base-content-dark placeholder:text-secondary-light placeholder:font-semibold font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.1)] placeholder:text-sm'
        onChange={(e) => input(e.target.value)}
      />
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;

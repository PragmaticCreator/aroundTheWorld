import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ items }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className='relative flex items-center justify-between px-5 py-4 min-w-[200px] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.1)] bg-primary-light dark:bg-primary-dark cursor-pointer text-sm'
      onClick={() => setToggle(!toggle)}
    >
      <p className=' whitespace-nowrap font-semibold'>Filter by Region</p>
      <HiChevronDown fontSize={20} />

      <AnimatePresence>
        {toggle && (
          <motion.ul
            initial={{ originX: 1, originY: 0, opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col absolute right-0 top-14 bg-primary-light dark:bg-primary-dark px-5 py-5 min-w-[200px] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-10'
          >
            {items.map((item, index) => (
              <li
                key={index}
                className='mb-2 last-of-type:mb-0 font-semibold hover:scale-125 origin-left duration-300 ease-in-out'
              >
                <Link to={`/region/${item}`}>{item}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  region: PropTypes.func,
};

export default Dropdown;

import { useDarkMode } from 'hooks/useDarkMode';
import { BsMoon, BsMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const toggleTheme = () => setTheme(colorTheme);

  return (
    <nav className='shadow-md bg-primary-light dark:bg-primary-dark'>
      <div className='container py-5 flex'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex-1'
        >
          <Link to={'/'} className='text-sm sm:text-2xl font-extrabold '>
            Where in the world?
          </Link>
        </motion.div>
        {/* Theme toggler */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex-none flex items-center cursor-pointer'
          onClick={toggleTheme}
        >
          {colorTheme === 'dark' && (
            <BsMoon className='mr-2 text-xs md:text-base' />
          )}
          {colorTheme === 'light' && (
            <BsMoonFill className='mr-2 text-xs md:text-base' />
          )}
          <p className='font-semibold text-xs sm:text-base'>Dark Mode</p>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

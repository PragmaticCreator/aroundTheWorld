import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Country, Region } from 'pages';
import { Navbar, Search, Dropdown } from 'components';
import { motion } from 'framer-motion';

const App = () => {
  const [input, setInput] = useState('');

  return (
    <div className='flex flex-col min-h-screen bg-base-light dark:bg-base-dark dark:text-base-content-dark text-base-content-light text-base'>
      <BrowserRouter>
        <Navbar />
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='container flex flex-col w-full md:flex-row items-start md:items-center justify-between mt-10'
        >
          <Search className='mb-8 md:mb-0' input={(input) => setInput(input)} />
          <Dropdown
            items={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
          />
        </motion.header>
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home input={input} />} />
            <Route path='/country/:country' element={<Country />} />
            <Route path='/region/:region' element={<Region input={input} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';
import { WaveLoader } from 'react-loaders-kit';

const Loader = () => {
  const theme = localStorage.getItem('theme');

  const loaderProps = {
    duration: 0.6,
    color: theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
    size: 60,
    loading: true,
  };

  return (
    <div className='flex flex-col items-center justify-center h-[60vh]'>
      <WaveLoader {...loaderProps} />
    </div>
  );
};

export default Loader;

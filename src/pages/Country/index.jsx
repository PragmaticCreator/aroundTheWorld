import React, { useState, useEffect } from 'react';
import { getByCountryName } from 'api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Loader } from 'components';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';

/**
 * @description - Text component
 * @param {string} title - title of the text
 * @param {string} content - content of the text
 */
const Text = ({ title, content }) => (
  <p className='font-semibold'>
    {title}: <span className='font-light'>{content ? content : 'N/A'}</span>
  </p>
);

const Country = () => {
  const [country, setCountry] = useState({});
  const { country: name } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const variants = {
    hidden: { opacity: 0, x: -80 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.5, duration: 0.8 },
    }),
  };

  useEffect(() => {
    getByCountryName(name).then((data) => {
      setCountry(data[0]);
    });

    let timer = setTimeout(() => {
      setLoading(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [name]);

  return (
    <div className='container my-16'>
      {!loading ? (
        <Loader />
      ) : (
        Object.entries(country).length > 0 && (
          <motion.div key={name}>
            {/* Previous page navigation */}
            <motion.div
              variants={variants}
              initial={'hidden'}
              animate={'visible'}
              custom={0.5}
              onClick={() => navigate(-1)}
            >
              <Button className='md:min-w-[125px]'>
                <div className='flex items-center justify-center'>
                  <BsArrowLeft fontSize={18} className='mr-2' />
                  <p>Back</p>
                </div>
              </Button>
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-5 lg:gap-12 xl:gap-32 mt-16'>
              {/* Flag */}
              <motion.img
                variants={variants}
                initial={'hidden'}
                animate={'visible'}
                custom={1.5}
                src={country.flag}
                alt='flag'
                className='flex-1 max-h-[400px] w-full'
              />
              {/* Content */}
              <motion.div
                variants={variants}
                initial={'hidden'}
                animate={'visible'}
                custom={2.5}
                className='flex flex-col flex-1'
              >
                <h2 className='text-2xl md:text-3xl font-extrabold my-5'>
                  {country.name}
                </h2>
                {/* Column One */}
                <div className='flex flex-col sm:flex-row flex-1'>
                  <div className='flex flex-1 flex-col gap-3'>
                    <Text title={'Native Name'} content={country.nativeName} />
                    <Text
                      title={'Population'}
                      content={country.population.toLocaleString()}
                    />
                    <Text title={'Region'} content={country.region} />
                    <Text title={'Sub Region'} content={country.subregion} />
                    <Text title={'Capital'} content={country.capital} />
                  </div>
                  {/* Column Two */}
                  <div className='flex flex-col flex-1 gap-3 mt-12 sm:mt-0 '>
                    <Text
                      title={'Top Level Domain'}
                      content={country.topLevelDomain}
                    />
                    <Text
                      title={'Currencies'}
                      content={
                        country.currencies
                          ? country.currencies
                              .map((currency) => currency.name)
                              .join(', ')
                          : 'N/A'
                      }
                    />
                    <Text
                      title={'Languages'}
                      content={
                        country.languages
                          ? country.languages
                              .map((language) => language.name)
                              .join(', ')
                          : 'N/A'
                      }
                    />
                  </div>
                </div>
                {/* Borders */}
                <div className=' mt-10'>
                  <Text
                    title={'Borders'}
                    content={
                      country.borders
                        ? country.borders.map((border, index) => (
                            <Link to={`/country/${border}`} key={index}>
                              <Button className='py-[0.5px] m-2 cursor-pointer'>
                                {border}
                              </Button>
                            </Link>
                          ))
                        : 'N/A'
                    }
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default Country;

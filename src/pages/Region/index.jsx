import { Card, Loader } from 'components';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getByRegion } from 'api';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion'

const Region = ({ input }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const { region } = useParams();

  useEffect(() => {
    getByRegion(region).then((data) => {
      setCountries(data);
    });

    let timer = setTimeout(() => {
      setLoading(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [region]);

  /**
   * @description - This function is used to filter the countries based on the input
   * @param {Array} list
   * @param {String} input
   * @returns {Array} filteredList
   */
  const filterList = (list, input) => {
    return list.filter((country) => {
      return country.name.toLowerCase().includes(input.toLowerCase());
    });
  };

  return (
    <div className='container mt-10'>
      {!loading || countries === null ? (
        <Loader />
      ) : (
        <React.Fragment>
          {/* List */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(4,320px)] justify-center w-full place-items-center gap-y-16'>
            {filterList(countries, input).map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <Link to={`/country/${country.name}`}>
                  <Card
                    flag={country.flag}
                    name={country.name}
                    region={country.region}
                    population={country.population}
                    capital={country.capital}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

Region.propTypes = {
  input: PropTypes.string,
};

export default Region;

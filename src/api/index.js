import Axios from 'redaxios';

export const getAllCountries = async () => {
  try {
    const response = await Axios.get('https://restcountries.com/v2/all');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getByCountryName = async (countryName) => {
  try {
    const response = await Axios.get(
      `https://restcountries.com/v2/name/${countryName}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getByRegion = async (region) => {
  try {
    const response = await Axios.get(
      `https://restcountries.com/v2/region/${region}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

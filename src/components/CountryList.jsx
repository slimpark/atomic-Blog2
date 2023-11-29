import CountryItem from "./CountryItem.jsx";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";
import Message from "./Message.jsx";
import useCities from "../context/useCities";

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
  countries: PropTypes.array,
};
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="choose from the map a city to add" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
}
export default CountryList;

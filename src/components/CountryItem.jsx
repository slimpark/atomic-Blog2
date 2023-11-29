import styles from "./CountryItem.module.css";

import PropTypes from "prop-types";

CountryItem.propTypes = {
  emoji: PropTypes.string,
  country: PropTypes.object,
};
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>

      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

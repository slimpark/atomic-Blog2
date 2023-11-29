import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const URL_BASE = `http://localhost:8900`;

const CitiesContext = createContext(null);

CitiesProvider.propTypes = {
  children: PropTypes.any,
};

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL_BASE}/cities`);
        const data = await res.json();

        setCities(data);
      } catch {
        alert("Error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL_BASE}/cities/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch {
      alert("Error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ isLoading, cities, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider, CitiesContext };

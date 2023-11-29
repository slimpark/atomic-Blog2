import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";

export function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside Cities Provider");
  return context;
}

export default useCities;

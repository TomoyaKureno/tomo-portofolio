import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useProfile must be used within ProfileProvider");
  }

  return context;
};

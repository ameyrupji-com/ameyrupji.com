import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Site from "./components/Site";
import LoadingSite from "./components/LoadingSite";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return <ThemeProvider>{loading ? <LoadingSite /> : <Site />}</ThemeProvider>;
}

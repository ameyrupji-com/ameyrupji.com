import React, { useEffect, useState } from "react";

import Site from "./components/Site";
import LoadingSite from "./components/LoadingSite";

export default function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    return (
      <>{loading ? (<LoadingSite/>) :(<Site />)}</>  
    );
}

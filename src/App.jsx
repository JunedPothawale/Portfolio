import { useEffect, useState } from "react";
import Router from "./router/Router";
import Preloader from "./components/common/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <>{loading ? <Preloader /> : <Router />}</>;
};

export default App;

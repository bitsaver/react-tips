import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import MainNavigation from "./componets/layout/MainNavigation";
import classes from "./App.module.css"

function App() {
  const element = useRoutes(routes);

  return (
    <div className={classes.app}>
      <MainNavigation />
      {element}
    </div>
  );
}

export default App;

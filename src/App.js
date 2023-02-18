import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import MainNavigation from "./componets/layout/MainNavigation";

function App() {
  const element = useRoutes(routes);

  return (
    <div>
      <MainNavigation />
      {element}
    </div>
  );
}

export default App;

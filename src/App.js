import {useRoutes} from "./router/Routes";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header"

function App() {
  const routes = useRoutes();

  return (
      <BrowserRouter>
          <Header />
        {routes}
      </BrowserRouter>
  );
}

export default App;

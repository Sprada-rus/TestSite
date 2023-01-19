import {useRoutes} from "./router/Routes";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header"
import {useSelector} from "react-redux";

function App() {
    const isAuth = useSelector((state) => state.authorization.isAuthorized)
    const routes = useRoutes(isAuth);

    return (
        <BrowserRouter>
            <Header />
            {routes}
        </BrowserRouter>
    );
}

export default App;

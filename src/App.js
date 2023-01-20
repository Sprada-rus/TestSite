import {useRoutes} from "./router/Routes";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header"
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "./redux/reducers/reducer";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.authorization.isAuthorized)
    const routes = useRoutes(isAuth);

    useEffect(() => {
        dispatch(checkAuth());
    }, [isAuth, dispatch]);

    return (
        <BrowserRouter>
            <Header />
            {routes}
        </BrowserRouter>
    );
}

export default App;

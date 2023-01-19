import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import WelcomePage from "../pages/WelcomePage";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

export const useRoutes = (isAuth = false) => {
    if (isAuth){
        return (
            <Routes>
                <Route path="/profile" />
                <Route path="/registration"  element={ <Navigate to={'/profile'} replace/> }/>
                <Route path="/" element={<Navigate to={'/profile'}/>} />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="/">
                    <Route index element={ <WelcomePage /> } />
                    <Route path="registration" element={ <Registration /> } />
                    <Route path="login" element={ <Login /> } />
                </Route>
                <Route path="/profile"  element={<Navigate to={'/login'} replace/>}/>
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        )
    }
}
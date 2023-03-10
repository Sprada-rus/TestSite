import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import NotFound from "../pages/NotFound";
import WelcomePage from "../pages/WelcomePage";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import RegistrationSuccess from "../pages/RegistrationSuccess";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import { logout } from "../redux/reducers/reducer";

export const useRoutes = (isAuth = false) => {
    if (isAuth){
        return (
            <Routes>
                <Route path="/TestSite">
                    <Route path="profile"  element={ <Profile /> }/>
                    <Route path="registration"  element={ <Navigate to={'/TestSite/profile'} replace/> }/>
                    <Route index element={ <WelcomePage /> } />
                    <Route path="login" element={ <Navigate to={'/TestSite/profile'}/> } />
                </Route>
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="/TestSite">
                    <Route index element={ <WelcomePage /> } />
                    <Route path="registration" >
                        <Route index element={<Registration />}/>
                        <Route path={'success'} element={ <RegistrationSuccess />} />
                    </Route>
                    <Route path="login" element={ <Login /> } />
                    <Route path="profile"  element={<Navigate to={'/TestSite/login'} replace/>}/>
                </Route>
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        )
    }
}

export const useNavRoutes = (isAuth) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const data = [
        {
            name: 'main',
            link: '/TestSite',
            label: 'На главную'
        },
        {
            name: 'registration',
            link: '/TestSite/registration',
            label: 'Регистрация'
        },
        {
            name: 'profile',
            link: '/TestSite/profile',
            label: 'Профиль'
        },
        {
            name: 'Войти',
            link: '/TestSite/login',
            label: 'Войти',
            condition: isAuth === false,
        }
    ];

    return (
        <div className="header__action">
            {data.map(nav => {
                if (!nav.hasOwnProperty('condition') || nav.condition){
                    return <Button key={nav.name} onClick={() => navigation(nav.link)} className={ window.location.pathname === nav.link ? 'active' : ''}>{nav.label}</Button>
                }

                return undefined;
            })}
            {isAuth && <Button onClick={() => {
                dispatch(logout());
                navigation('/TestSite/');
            }}>Выйти</Button>}
        </div>
    )
}
import Logo from "../../images/logo.png"
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { logout } from "../../redux/reducers/reducer";

export default function Header() {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.authorization.isAuthorized);
    const dispatch = useDispatch();

    return (
        <header>
            <div className="content">
                <div className="header__logo">
                    <img src={Logo} alt="Logo" onClick={() => navigate('/')}/>
                </div>
                <div className="header__action">
                    {!isAuth &&
                    <>
                        <Button onClick={() => navigate('/login')}>Войти</Button>
                        <Button onClick={() => navigate('/registration')}>Регистрация</Button>
                    </>
                    }
                    {isAuth && <Button onClick={() => {
                        dispatch(logout());
                        navigate('/');
                    }}>Выйти</Button>}

                </div>
            </div>
        </header>
    )
}
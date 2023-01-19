import Logo from "../../images/logo.png"
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div className="content">
                <div className="header__logo">
                    <img src={Logo} alt="Logo" onClick={() => navigate('/')}/>
                </div>
                <div className="header__action">
                    <Button onClick={() => navigate('/login')}>Войти</Button>
                    <Button onClick={() => navigate('/registration')}>Регистрация</Button>
                </div>
            </div>
        </header>
    )
}
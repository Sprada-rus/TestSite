import Logo from "../../images/logo.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavRoutes } from "../../router/Routes";

export default function Header() {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.authorization.isAuthorized);
    const navigation = useNavRoutes(isAuth);

    return (
        <header>
            <div className="content">
                <div className="header__logo">
                    <img src={Logo} alt="Logo" onClick={() => navigate('/')}/>
                </div>

                {navigation}
            </div>
        </header>
    )
}
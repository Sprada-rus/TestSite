import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function RegistrationSuccess() {
    const navigate = useNavigate()

    return (<div className="content">
        <h1>Регистрация прошла успешно!</h1>
        <Button className="btn-primary" onClick={() => navigate('/login')}>Войти в личный кабинет</Button>
    </div>)
}
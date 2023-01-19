import {useDispatch} from "react-redux";
import { login } from "../redux/reducers/reducer"
import {useNavigate} from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="content">
            <h1>Войти в личный кабинет</h1>
            <button onClick={() => {
                dispatch(login());
                navigate('/');
            }}>Войти</button>
        </div>
    )
}
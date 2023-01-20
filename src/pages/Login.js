import {useDispatch} from "react-redux";
import { login } from "../redux/reducers/reducer"
import {useNavigate} from "react-router-dom";
import {TextField, Button, Snackbar, Alert} from "@mui/material";
import users from "../data/user.json"
import {useState} from "react";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        for (const user of users) {
            if (user.user_name === formData.get('login')){
                if (user.user_password === formData.get('password')) {
                    dispatch(login(users.indexOf(user)));
                    navigate('/profile');
                } else {
                    setIsOpenSnackbar(true);
                }
            }
        }

        setIsOpenSnackbar(true);
    }

    return (
        <div className="content">
            <h1>Войти в личный кабинет</h1>
            <form id="login_users" className="form-custom" onSubmit={submitHandler}>
                <TextField
                    id="login"
                    name="login"
                    type="text"
                    label="Логин"
                    variant="standard"
                    required
                />

                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Пароль"
                    variant="standard"
                    autoComplete="current-passowrd"
                    required
                />
                <Button className="btn-primary" style={{ margin: "1em auto" }} type="submit">Войти</Button>
            </form>
            <Snackbar open={isOpenSnackbar} autoHideDuration={2000} onClose={() => setIsOpenSnackbar(false)}>
                <Alert severity="error">Имя пользователя или пароль введены не верно!</Alert>
            </Snackbar>
        </div>
    )
}
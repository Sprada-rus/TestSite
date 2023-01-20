import {Alert, Button, Snackbar, TextField} from "@mui/material";
import users from "../data/user.json";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Registration(){
    const navigate = useNavigate();
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const hasUser = (userName) => !!users.find(user => user.user_name === userName);

    const correctPassword = (password, repeatPassword) => password === repeatPassword;

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (hasUser(formData.get('login'))) {
            setIsOpenSnackbar(true);
            setErrorMessage('Пользователь с таким логином уже зарегистрирован')
            return;
        }

        if (!correctPassword(formData.get('password'), formData.get('repeat-password'))) {
            setIsOpenSnackbar(true);
            setErrorMessage('Введенные пароли не совпадают.');
            return;
        }

        navigate('/registration/success')
    }

    return (
        <div className="content">
            <h1>Регистрация</h1>
            <form id="registration" className="form-custom" onSubmit={submitHandler}>
                <TextField
                    id="first_name"
                    name="first_name"
                    type="text"
                    label="Имя"
                    variant="standard"
                    inputProps={{ inputMode:"text", pattern: '[A-Za-zА-Яа-я]{4,}' }}
                    required
                />

                <TextField
                    id="login"
                    name="login"
                    type="text"
                    label="Логин"
                    variant="standard"
                    helperText="Логин может иметь латинские символы и цифры. Пример: user123"
                    inputProps={{ inputMode:"text", pattern: '[A-Za-z0-9_]{4,50}$' }}
                    required
                />

                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Пароль"
                    variant="standard"
                    helperText="Пароль может содержать латинские символы и цифры. Пароль должен иметь длину от 4 до 8 символов."
                    inputProps={{ inputMode:"text", pattern: '[A-Za-z0-9]{4,8}' }}
                    required
                />

                <TextField
                    id="repeat-password"
                    name="repeat-password"
                    type="password"
                    label="Подтвердить указанный пароль"
                    variant="standard"
                    inputProps={{ inputMode:"text", pattern: '[A-Za-z0-9]{4,8}' }}
                    required
                />
                <Button className="btn-primary" style={{ margin: "1em auto" }} type="submit">Зарегестрироваться</Button>
            </form>

            <Snackbar open={isOpenSnackbar} autoHideDuration={2000} onClose={() => setIsOpenSnackbar(false)}>
                <Alert severity="error">{errorMessage}</Alert>
            </Snackbar>
        </div>
    )
}
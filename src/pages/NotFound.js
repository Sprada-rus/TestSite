import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return <div>
        Страница не найдена
    </div>
}
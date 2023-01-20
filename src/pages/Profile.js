import {useMemo} from "react";
import users from "../data/user.json";
import {useSelector} from "react-redux";

export default function Profile() {
    const userId = useSelector(state => state.authorization.objId)
    const userName = useMemo(() => users[userId].user_first_name, [userId])

    return (
      <div className="content">
          <h1>Личный кабинет</h1>
          <h2>Добро пожаловать, {userName}!</h2>
      </div>
    );
}
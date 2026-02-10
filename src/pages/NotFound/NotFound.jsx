import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.mainBox}>
      Ошибка 404, данной страницы не существует :(
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export { NotFound };

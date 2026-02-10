import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import s from "./Main.module.css";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const [state, setState] = useState(null);
  const navigate = useNavigate();

  const getCards = () => {
    return state.map((item) => {
      return (
        <li
          className={s.cartItem}
          onClick={() => navigate(`/item/${item.id}`)}
          key={item.id}
        >
          <img
            src={item.colors[0].images[0]}
            alt={item.name}
            className={s.img}
          />
          <p className={s.description}>{item.colors[0].description}</p>
        </li>
      );
    });
  };

  useEffect(() => {
    const getProductsArr = async () => {
      try {
        const data = await getProducts();
        if (data) {
          setState(data);
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    getProductsArr();
  }, []);

  return (
    <div className={s.mainBox}>
      <Link className={s.link} to="cart">
        В корзину
      </Link>
      <ul className={s.cartList}>
        {state ? getCards() : "Нет товаров в наличии"}
      </ul>
    </div>
  );
};

export { Main };

import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../store";
import s from "./Cart.module.css";

const Cart = () => {
  const { cartArr, setCartArr } = useApp();
  const navigate = useNavigate();

  const removeCard = (e, removingCardindex) => {
    e.stopPropagation();

    const newCardsArr = cartArr.filter(
      (_, index) => removingCardindex !== index,
    );

    setCartArr([...newCardsArr]);
  };

  const getCards = () => {
    return cartArr.map((card, index) => {
      return (
        <li
          className={s.cardItem}
          key={index}
          onClick={() => navigate(`/item/${card.cartId}`)}
        >
          <img src={card.img} alt={card.title} className={s.img} />
          <h3 className={s.title}>{card.title}</h3>
          <p className={s.description}>{`Цвет: ${card.colorName}`}</p>
          <p className={s.description}>{`Размер: ${card.size}`}</p>
          <p className={s.description}>{`Цена: ${card.price} ₽`}</p>
          <button
            type="button"
            className={s.button}
            onClick={(e) => removeCard(e, index)}
          >
            Удалить товар
          </button>
        </li>
      );
    });
  };
  return (
    <div className={s.mainBox}>
      <Link className={s.navLink} to="/">
        На главную
      </Link>
      <ul className={s.cardsList}>{getCards()}</ul>
    </div>
  );
};

export { Cart };

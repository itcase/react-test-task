import { useEffect, useState } from "react";
import s from "./Item.module.css";
import { getProduct } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { useApp } from "../../store";
import cn from "classnames";

const Item = () => {
  const [card, setCards] = useState(null);
  const [showCard, setShowCard] = useState(null);

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const { id } = useParams();
  const { cartArr, setCartArr } = useApp();

  useEffect(() => {
    const getProductsArr = async () => {
      try {
        const data = await getProduct(Number(id));
        if (data) {
          setCards(data);
          const firstColor = data.colors?.[0];
          setShowCard(firstColor ?? null);
          setActiveImgIndex(0);
          setActiveColor(firstColor.id);
          setActiveSize(firstColor.sizes[0]);
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    getProductsArr();
  }, [id]);

  useEffect(() => {
    if (showCard) {
      setActiveImgIndex(0);
      setActiveSize(showCard.sizes[0]);
    }
  }, [showCard]);

  const getImagesBar = (imgs, description) => {
    return imgs.map((img, index) => (
      <li
        key={index}
        className={cn(s.imageBarItem, { [s.active]: index === activeImgIndex })}
        onClick={() => setActiveImgIndex(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setActiveImgIndex(index);
        }}
      >
        <img src={img} alt={description} className={s.smallImg} />
      </li>
    ));
  };

  const changeColor = (id) => {
    const nextCard = card.colors.find((card) => card.id === id);
    setShowCard(nextCard);
    setActiveColor(id);
  };

  const getColors = () => {
    return card.colors.map((color) => {
      return (
        <li
          className={cn(s.colorItem, { [s.active]: color.id === activeColor })}
          onClick={() => changeColor(color.id)}
          key={color.id}
        >
          {color.name}
        </li>
      );
    });
  };

  const changeSize = (index) => setActiveSize(showCard.sizes[index]);

  const getSizes = () => {
    return showCard.sizes.map((size, index) => {
      return (
        <li
          className={cn(s.sizeItem, { [s.active]: size === activeSize })}
          onClick={() => changeSize(index)}
          key={index}
        >
          {size}
        </li>
      );
    });
  };

  if (!showCard) return <div className={s.mainBox}>Товар не найден</div>;

  const previewSrc = showCard.images?.[activeImgIndex] ?? showCard.images?.[0];

  const addToCart = () => {
    const cartHasThisItem = cartArr.find((item) => {
      if (
        item.cartId === card.id &&
        item.colorId === activeColor &&
        item.size === activeSize
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (cartHasThisItem) return;

    const newItem = {
      cartId: card.id,
      colorId: activeColor,
      size: activeSize,
      img: showCard.images[activeImgIndex],
      title: card.name,
      colorName: showCard.name,
      price: showCard.price,
    };

    setCartArr((prev) => [...prev, newItem]);
  };

  return (
    <div className={s.mainBox}>
      <Link to="/" className={s.link}>
        На главную
      </Link>
      <div className={s.cardBox}>
        <img
          src={previewSrc}
          alt={showCard.description}
          className={s.previewImg}
        />

        <ul className={s.imgsList}>
          {getImagesBar(showCard.images ?? [], showCard.description)}
        </ul>
        <hr className={s.line} />
        <p className={s.colorTitle}>Выберите цвет</p>
        <ul className={s.colorsList}>{getColors()}</ul>
        <hr className={s.line} />
        <p className={s.price}>Цена: {showCard.price} ₽</p>
        <hr className={s.line} />
        <p className={s.sizeText}>
          {showCard.sizes.length
            ? " Выберите свой размер"
            : "Размеров больше нет"}
        </p>
        <ul className={s.sizesList}>{getSizes()}</ul>
        <button
          type="button"
          className={s.button}
          onClick={addToCart}
          disabled={!showCard.sizes.length}
        >
          Добавить в корзину
        </button>
      </div>
      <Link to="/cart" className={s.link}>
        В корзину
      </Link>
    </div>
  );
};

export { Item };

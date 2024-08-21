import React from "react";
import { MinusIcon, PlusIcon } from "../HeoroIcons";
import { useDispatch } from "react-redux";

import {
  clearItem,
  addItem,
  substractItem,
} from "../features/cart/cartSlice.js";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <>
      {/* これを上のコンポーネントでやる <CartItem key={item.id} {...item} />;*/}
      {items.map(({ id, img, title, price, amount }) => {
        return (
          <article class="cart-item" key={id}>
            <img src={img} alt="" />
            <div>
              <h4>{title}</h4>
              <h4 class="item-price">{price}円</h4>
              <button
                class="remove-btn"
                onClick={() => dispatch(clearItem(id))}
              >
                削除
              </button>
            </div>
            <div>
              <button class="amount-btn" onClick={() => dispatch(addItem(id))}>
                <PlusIcon />
              </button>
              <p class="amount">{amount}</p>
              <button
                class="amount-btn"
                onClick={() => dispatch(substractItem(id))}
              >
                <MinusIcon />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default CartItem;

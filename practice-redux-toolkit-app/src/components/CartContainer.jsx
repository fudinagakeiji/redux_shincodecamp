import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { totalCalculate } from "../features/cart/cartSlice";
import Modal from "./Modal";
import { modalOpen } from "../features/modalSlice";
const CartContainer = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalCalculate());
  }, [items]);
  return (
    <>
      <section class="cart">
        <header>
          <h2>買い物かご</h2>
        </header>
        <div>
          <CartItem items={items} />
        </div>
        <hr />
        <footer>
          <div class="cart-total">
            <h4>
              合計<span>{total}円</span>
            </h4>
          </div>
          <button
            class="btn clear-btn"
            onClick={() => {
              dispatch(modalOpen());
            }}
          >
            全削除
          </button>
          <Modal />
        </footer>
      </section>
    </>
  );
};

export default CartContainer;

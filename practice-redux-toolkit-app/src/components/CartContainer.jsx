import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { modalOpen } from "../features/modalSlice";

import { totalCalculate } from "../features/cart/cartSlice";
import Modal from "./Modal";

const CartContainer = () => {
  // こんな感じで分割代入すればいいよ。
  // const { amount, cartItems, total } = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  // useEffectもここではいらん。app.jsで書くよ
  useEffect(() => {
    dispatch(totalCalculate());
  }, [items]);
  // ここで出汁分けてる
  // if (amount < 1) {
  //   return (
  //     <section className="cart">
  //       <header>
  //         <h2>買い物かご</h2>
  //         <h4 className="empty-cart">何も入ってないよ😭</h4>
  //       </header>
  //     </section>
  //   );
  // }
  return (
    <>
      <section class="cart">
        <header>
          <h2>買い物かご</h2>
        </header>
        <div>
          {/*ここでmapで回す。 
          {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })} */}
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
          {/* これいらん */}
          <Modal />
        </footer>
      </section>
    </>
  );
};

export default CartContainer;

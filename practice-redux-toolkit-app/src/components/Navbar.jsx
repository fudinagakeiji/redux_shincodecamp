import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../HeoroIcons";

const Navbar = () => {
  // stateと書くのが一般的な慣例ですが、storeを使っても機能は変わりません。
  // state.cart.amountで、stateの中にあるcartというスライスのamountという値を取得していることがわかりやすくなるため、通常はstateという名前を使うことが推奨されます。

  // const { amount } = useSelector((store) => store.cart);分割代入でもいいのでは？
  const amount = useSelector((state) => state.cart.amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount.amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

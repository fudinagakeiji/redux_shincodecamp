import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../features/cart/cartSlice";
import { modalClose } from "../features/modalSlice";
const Modal = () => {
  const visible = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <aside
        class="modal-container"
        // styleで出汁分けしないで、コンポーネントまるごとだし訳する。{isOpen && <Modal />}
        style={{ visibility: visible ? "visible" : "hidden" }}
      >
        <div class="modal">
          <h4>買い物かごを全てからにしますか？</h4>
          <div class="btn-container">
            <button
              class="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(modalClose());
              }}
            >
              OK
            </button>
            <button
              class="btn clear-btn"
              onClick={() => dispatch(modalClose())}
            >
              やめとく
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Modal;

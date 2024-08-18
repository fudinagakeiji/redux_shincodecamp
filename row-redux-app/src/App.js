import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, login } from "./actions";

function App() {
  const couter = useSelector((state) => state.couter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>hello</h1>
      <h3>カウント：{couter}</h3>
      <button onClick={() => dispatch(increment(7))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>{isLogin ? "ログインに成功" : "ログインしてください"}</h3>
      <button onClick={() => dispatch(login())}>ログイン・ログアウト</button>
    </div>
  );
}

export default App;

import "./App.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

// CartContainerで書いたこれら、最上位でコンポーネントだし分ける。
// function App() {
//   const dispatch = useDispatch();
//   const { cartItems } = useSelector((state) => state.cart);
//   const { isOpen } = useSelector((state) => state.modal);

//   useEffect(() => {
//     dispatch(calculateTotals());
//   }, [cartItems]);
function App() {
  return (
    <div className="App">
      {/* {isOpen && <Modal />} モーダルもここで出し分ける*/}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;

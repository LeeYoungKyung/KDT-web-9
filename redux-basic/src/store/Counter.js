import { UseSelector, useDispatch, useSelector } from "react-redux";
import { counterAction } from ".";
export default function counter() {
  const counter = useSelector(state => state);

  const add = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };
  const calc = () => {
    console.log(action.payload);
  };
  return (
    <div>
      <h2>{"?"}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={calc}>CALC</button>
    </div>
  );
}

export const counterAction = counterSlice.actions;

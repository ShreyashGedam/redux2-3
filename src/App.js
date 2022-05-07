import "./App.css";
import { store } from "./redux/store";
import { addCount} from "./redux/action"
import { useDispatch, useSelector } from "react-redux"
import { Counter } from "./components/counter";
import { Todo } from "./components/todo";
 


function App() {
  // const state = store.getState()
  // console.log("Getstate" , state)

  // const dispatch = useDispatch()

  // const counter = useSelector( (store) => store.counter )

  return (
    <div className="App">
      {/* <h2>Counter : {counter}</h2>
      <button
      onClick={ function()
      {
        // store.dispatch(addCount(1))
        dispatch(addCount(1))
      }}
      >Add 1</button> */}
      <Counter></Counter>
      <Todo></Todo>
    </div>
  );
}

export default App;

 
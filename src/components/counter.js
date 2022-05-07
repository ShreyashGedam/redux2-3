import { store } from "../redux/store";
import { addCount} from "../redux/counter/action"
import { useDispatch, useSelector } from "react-redux"




export const Counter = () =>
{

    const dispatch = useDispatch()

  const counter = useSelector( (store) => store.counter.counter )

  console.log("Rendering counter")
    return(
        <div>
            <h2>Counter : {counter}</h2>
      <button
      onClick={ function()
      {
        // store.dispatch(addCount(1))
        dispatch(addCount(1))
      }}
      >Add 1</button>
        </div>
    )
}
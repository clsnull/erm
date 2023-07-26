
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "@/store/counter/counterSlice"
function Login() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Add</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>Dec</button>
        </div>
    )
}

export default Login


import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,reset } from "../Slices/CounterSlice"
import { useTheme } from "../Context/ThemeContext";
function Counter() {

   
    const count = useSelector(state => state.counter.value)

    
    const dispatch = useDispatch()


    const {
        state: { isDark }
    } = useTheme()

  
    const handleIncrement = useCallback(() => {
        dispatch(increment())
    }, [dispatch])

    const handleDecrement = useCallback(() => {
        dispatch(decrement())
    }, [dispatch])


    const handlereset=useCallback(()=>{
        dispatch(reset())
    },[dispatch])


    const doubleCount = useMemo(() => {
        console.log("double click done");
        return count * 2

    })



    return (
        <div >
            <h2>Counter Component</h2>
            <p>Current {count}</p>
            <p>Double Count (Memoized) : {doubleCount}</p>
            <button onClick={handleIncrement} >
                increment
            </button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handlereset}>Reset</button>

        </div>
    )


}
export default Counter
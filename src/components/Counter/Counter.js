import { useState } from "react";


// function Counter(){
//     var countValue=0;
//     const increaseCount = () => {
//         countValue++;
//         console.log(countValue);
//     }

//     const decreaseCount = () => {
//         countValue--;
//         console.log(countValue);
//     }

//     return (
//         <div className="mt-5 mb-3 text-center">
//             <h2>Count Value:{countValue}</h2>
//             <button className="btn btn-outline-success" onClick={increaseCount}>Increase</button>
//             <button className="btn btn-outline-danger" onClick={decreaseCount}>Decrease</button>
//         </div>
//     );
// }

function Counter(){
    let [state,setState]=useState(0);
    const increaseCount = () =>{
        setState(state+1);
    }

    const decreaseCount = () =>{
        if(state>0)
        setState(state-1);
    }

    const clearCount = () =>{
        setState(state=0);
    }

    return (
        <div className="mt-5 mb-3 text-center">
            <h2>Count Value: {state} </h2>
            <button className="btn btn-outline-success" onClick={increaseCount}>Increase</button>
            <button className="btn btn-outline-danger" onClick={decreaseCount}>Decrease</button>
            <button className="btn btn-outline-warning" onClick={clearCount}>Clear</button>
        </div>
    );
}




export default Counter;
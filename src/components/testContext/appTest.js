import  A from './a'
// import {createContext} from "react";

// export  let TestContext=createContext();
export default function AppTest() {

    const x='hello';
    // const y='OK'
    return(
// <TestContext.Provider value={y}>
//         <div>
//             <A x={x}/>
//         </div>
// </TestContext.Provider>

    <div>
        <A x={x}/>

    </div>



    );
}
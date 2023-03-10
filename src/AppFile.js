// Creating an App Component

//Alias/Nickname : Exp (It can be anything)
//./expressions => File name
import Exp from "./expressions";

import './styles.css'

import {firstName,lastName} from "./expressions";

function App()
{
    return(
        <>
            <h1> This is an App component</h1>
            {/* props :  */}
            {/* Component Name */}
            <Exp num1="500" num2="900"/>

            {/* use className instead of class */}
            <h2 className="heading">Imported Variable : {firstName}</h2>
            <h2>Imported Variable : {lastName}</h2>
        </>
    )
}

export default App;


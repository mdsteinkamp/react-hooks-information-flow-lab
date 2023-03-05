import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
    // console.log(appClass)
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>

    )
}

export default Header


// function Header({ onDarkModeChange }) {
//     return (
//         <div className={"App " + (isDarkMode ? "dark" : "light")}>
//             <header>
//                 <h2>Shopster</h2>
//                 <button onClick={onDarkModeChange}>
//                     {isDarkMode ? "Dark" : "Light"} Mode
//                 </button>
//             </header>
//             <ShoppingList items={itemData} />
//       </div>
//     )
// }
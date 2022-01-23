import React, { useState, createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalState = (props) => {
    const [womenData, setWomenData] = useState({})

    return (
        <GlobalContext.Provider value={{
            womenData, 
            setWomenData}}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState 
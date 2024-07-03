import { createContext, useState } from "react";

export const UsdContext = createContext()

export function UsdContextProvider(props) {

    const [ usdValue, setUsdValue ] = useState()

    return (<>
        <UsdContext.Provider value={
                {
                    usdValue,
                    setUsdValue
                }
        }>
            {props.children}
        </UsdContext.Provider>
    </>)
}
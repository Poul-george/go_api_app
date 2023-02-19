import {
    memo,
    createContext,
    useState,
    Dispatch,
    ReactNode,  
    SetStateAction,
} from "react";

export type GlobalState = {
    loadding: boolean;
    error?: string;
}

const initialGlobalState = { loadding: false };
export const GlobalStateContext = createContext<GlobalState>(initialGlobalState);
export const setGlobalStateContext = createContext<Dispatch<SetStateAction<GlobalState>>>(() => undefined)

export const GlobalStateProvider = memo(
    ({ children }: {
        children: ReactNode;
    }) => {
        const [data, setData] = useState<GlobalState>(initialGlobalState);

        return (
            <GlobalStateContext.Provider value={data}>
                <setGlobalStateContext.Provider value={setData}>
                    {children}
                </setGlobalStateContext.Provider>
            </GlobalStateContext.Provider>
        )
    }
)
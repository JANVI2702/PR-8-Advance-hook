import { createContext,useContext,useReducer } from "react";

const ThemeContext = createContext()

const initialState={
    isDark: false,

}

const themeReducer = (state,action)=>{
    switch(action.type){
        case  "Toggle_Theme" :
            return {...state , isDark : !state.isDark};
        default:
            return state
    }
}


export const ThemeProvider =({children})=>{
    const [state,dispatch]=useReducer(themeReducer,initialState)
    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme =()=>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error ("Error is context")
    }
    return context
}


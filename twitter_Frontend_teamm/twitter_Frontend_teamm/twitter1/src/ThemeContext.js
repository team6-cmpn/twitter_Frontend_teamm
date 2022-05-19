import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  darkMode: localStorage.getItem('dark')===null?true:localStorage.getItem('dark')
};
// const LightState ={
//     darkMode: false,
// }

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
        localStorage.setItem('dark',false)
        state.darkMode = false
      return { darkMode:false };
    case "DARKMODE":
        localStorage.setItem('dark',true)
        state.darkMode = true
      return { darkMode:true};
    default:
      return state;
  }
};

export function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;}
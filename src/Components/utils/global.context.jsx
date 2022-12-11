import { createContext, useReducer } from "react";

export const ContextGlobal = createContext();

const reducerFunction = (state, { bgFlag }) => {
  switch (bgFlag) {
    case "DARK":
      return {
        bgFlag: "LIGHT",
        bgColor: "#FFFFFF",
        ftColor: "#222222"
      }
    case "LIGHT":
      return {
        bgFlag: "DARK",
        bgColor: "#222222",
        ftColor: "#FFFFFF",
        
      }
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const initalState = { bgFlag: "LIGHT", ftColor: "#222222", bgColor: "#ffffff" }

  const [state, dispatch] = useReducer(reducerFunction, initalState);

  const store = {
    state,
    dispatch,
  };

  return (
    <ContextGlobal.Provider value={store}>
      <div style={{ backgroundColor: `${state.bgColor}`, width: "100%", height: "100vh", minHeight: "100%", color: `${state.ftColor}` }}>
        {children}
      </div>
    </ContextGlobal.Provider>
  )
}

export default ContextProvider;
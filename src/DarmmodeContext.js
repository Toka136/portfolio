import { createContext, useState,useContext } from "react";

const Darkmodecontext=createContext();
export const DarkmodecontextProvider = function ({ children }) {
  const [DarkmodeVariable, setDarkmodeVariable] = useState(false);
return(
    <Darkmodecontext.Provider value={[DarkmodeVariable, setDarkmodeVariable] } >
        {children}
    </Darkmodecontext.Provider>
  );
}
export const useDarkmode = () => useContext(Darkmodecontext);


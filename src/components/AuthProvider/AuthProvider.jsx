import { createContext } from "react";
// import router from "../utils/router";

export const authContext = createContext()

const AuthProvider = (props) => {
    
    console.log(props);
    

    return (
        <div>
          <authContext.Provider value={'texst'}>
             {
                props.routes
             }
          </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
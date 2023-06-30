import { createContext } from "react";

const context = createContext();
const SharedData = (props) => {
    const users = ["Patient", "Doctor", "Admin"];
    const genders = ["Male", "Female"];
    const data = {
        users: users,
        genders: genders
    };
    
    return(
        <>
            <context.Provider value = {data}>
                {props.children}
            </context.Provider>
        </>
    )
}

export {SharedData, context};
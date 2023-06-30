import { createContext } from "react";

const context = createContext();
const SharedData = (props) => {
    const users = ["Patient", "Doctor", "Admin"];
    const data = {
        users: users
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
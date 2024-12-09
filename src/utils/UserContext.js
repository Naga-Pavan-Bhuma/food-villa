import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"Naga Pavan",
        email:"bhumanagapavan@gmail.com"
    }
})
UserContext.displayName="UserContext";
export default UserContext;
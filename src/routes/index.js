import { useContext } from "react";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import AuthContext from "../contexts/AuthContext";

export default function Routes(){
    const {logado} = useContext(AuthContext);
    return(
        logado == true ? <AppRoutes/> : <AuthRoutes/>
    )
}
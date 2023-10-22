import { useContext } from "react";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import AuthContext from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function Routes(){
    const {logado, loading} = useContext(AuthContext);

    if(loading){
        return(
            <View style={{flex: 1,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'black'
            }}>
                <ActivityIndicator size = {'large'}/>
            </View>
        )
    }
    return(
        logado == true ? <AppRoutes/> : <AuthRoutes/>
    )
}
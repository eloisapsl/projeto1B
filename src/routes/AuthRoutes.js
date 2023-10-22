import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
            <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
             <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown: false}}/>
            <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} options=   {{headerShown: false}}/>
        </Stack.Navigator>
    );
}
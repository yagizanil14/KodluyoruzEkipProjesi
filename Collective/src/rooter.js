import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginPages, SignUp, MainPages} from "./pages"

const Stack = createStackNavigator();

function rooter() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginPage">
                <Stack.Screen name="LoginPage" component={LoginPages} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="MainPages" component={MainPages} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default rooter
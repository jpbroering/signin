import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn'
import BemVindo from '../pages/BemVindo'
import TelaInicial from '../pages/TelaInicial'
import ViewName from '../pages/ViewName'
import ViewText from '../pages/ViewText'
import ErrorU from '../pages/ErrorU'
import ErrorD from '../pages/ErrorD'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BemVindo"
                component= { BemVindo }
                options= { { headerShown: false} }
                />
            <Stack.Screen
                name="SignIn"
                component= { SignIn }
                options= { { headerShown: false} }
                />
            <Stack.Screen
                name="TelaInicial"
                component= { TelaInicial }
                options= { { headerShown: false} }
                />
            <Stack.Screen
                name="ViewName"
                component= { ViewName }
                options= { { headerShown: false} }
                />
            <Stack.Screen
                name="ViewText"
                component= { ViewText }
                options= { { headerShown: false} }
                />
            <Stack.Screen
                name="ErrorU"
                component= { ErrorU }
                options= { { headerShown: false} }
                />
            <Stack.Screen
                name="ErrorD"
                component= { ErrorD }
                options= { { headerShown: false} }
                />
            </Stack.Navigator>
            
    )
}
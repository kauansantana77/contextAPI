import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UserForm from './views/UserForm.js'
import UserList from './views/UserList'
import { Button } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import { UserProvider } from './context/UserContext'

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <UserProvider>
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='UserList'
            screenOptions={screenOptions}
            >
                <Stack.Screen
                name = "UserList"
                component={UserList}
                options={() => {
                 return {
                 title: "Lista de Usuários",
                headerRight: () =>  (
                 <Button
                onPress={() => navigation.navigation("UserForm")}
                 type="Outline"
                 icon={
              <Icon name="add" 
                 size={25} 
                 color='blue'
                                            />
                                        }
                                />
                        )
                     }
                }}
                />
                <Stack.Screen
                name="UserForm"
                component={UserForm}
                options={{
                    title: "Formulário de Usuarios"
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </UserProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#000'
    },

    headerTintColor: 'fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
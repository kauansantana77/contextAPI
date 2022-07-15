import React, { useContext, useState } from 'react'
import {Text, TextInput, View, StyleSheet, Button} from 'react-native'
import UserContext from '../context/UserContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch} = useContext(UserContext)

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Digite o nome:"
                value={user.name}
                />
            <Text>E-mail</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, email})}
                placeholder="Digite o E-mail"
                value={user.name}
                />
                <Button>
                 title="Salvar alterações" 
                 onPress={() => {
                 dispatch({
                type: user.id ? 'updateUser' : 'createUser', 
                payload: user, 
                        })
                navigation.goBack()
                    }}
                </Button>4
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
    },
})
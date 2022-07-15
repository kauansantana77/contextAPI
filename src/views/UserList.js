import React, { useContext } from 'react'
import {View, FlatList, Button, Alert} from 'react-native'
import {ListItem} from 'react-native-elements'
import { Icon } from 'react-native-vector-icons/Icon'
import UserContext from '../context/UserContext'

export default props => {

    const { state, dispatch} = useContext(UserContext)

    function confirmDelete(user) {
        Alert.alert('Apagar usuário', 'Deseja apagar o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })               
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions (user) {
        return (
            <>
            <Button>
                onPress={()=> props.navigation.navigation('UserForm', user)}
                type="clear"
                icon={<Icon name="edit" size={25} color="green" />}
            </Button>
            <Button>
                onPress={()=> props.navigation.navigation('UserForm', user)}
                type="clear"
                icon={<Icon name="delete" size={25} color="green" />}
            </Button>
            </>
        )
    }
    
    function getUserItem({ item: user }) {
        return (
            <ListItem>
            leftAvatar={{source: {uri: user.avatarurl}}}
            key={user.id}
            title={user.name}
            subtitle={user.email}
            rightElement={getActions(user)}
            onPress = {() => props.navigation.navigation('UserForm', user)}
            </ListItem>  
        )
    }
    return (
        <View>
            <FlatList
             keyExtractor={user => user.id.toString()}
             data={state.user}
             renderItem={getUserItem}
             />
        </View>
        
        
    )
}
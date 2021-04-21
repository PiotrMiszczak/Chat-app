import React from 'react'
import {  View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Styles from './Style'
import {ChatRoom} from '../../types'
import moment from 'moment'
import {useNavigation} from '@react-navigation/native'

// TOdo : touchable woithoutfeedback, new screen

export type ChatListItemProps = {
    chatRoom:ChatRoom;
}

const ListItem = (props:ChatListItemProps)=>{

    const {chatRoom} = props
    const navigation = useNavigation()
    

const onClick = () => {
    navigation.navigate('ChatRoom',{id:chatRoom.id, name:chatRoom.users[1].name})
}
   
    
    return(
        <TouchableWithoutFeedback onPress={onClick}>
             <View style={Styles.container}>
            <View style={Styles.containerLeft}>
         <Image style = {Styles.avatar} source={{uri: chatRoom.users[1].imageUri}} />
         
            <View style={Styles.textBox}>
         <Text style={Styles.textName}>{chatRoom.users[1].name}</Text>
         <Text numberOfLines={1} style={Styles.textMessage}>{chatRoom.lastMessage.content.length>22 ? `${chatRoom.lastMessage.content.slice(0,22)}...` :chatRoom.lastMessage.content  }</Text>
         </View>
         </View>
         <Text style={Styles.textTime}>{chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
        </View>
        </TouchableWithoutFeedback>
       
    ) 
}

export default ListItem  
import React from 'react'
import {  View, Text, Image } from 'react-native';
import Styles from './Style'
import {ChatRoom} from '../../types'
import moment from 'moment'


export type ChatListItemProps = {
    chatRoom:ChatRoom;
}

const ListItem = (props:ChatListItemProps)=>{

    const {chatRoom} = props
    const date = new Date();
   


   
    
    return(
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
    ) 
}

export default ListItem  
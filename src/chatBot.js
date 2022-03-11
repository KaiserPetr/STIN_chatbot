import React,{useState} from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Msg from "./msg";
import { data } from "./data";
import Styles from "./styles";

let chats = [];
const ChatBot = () => {
  const [msg, setMsg] = useState('');
  const [chatList,setChatList] = useState([])

  const getAnswer = q => {
    if ( q == "help"){
      let str = "Seznam známých příkazů:\n"
      for (let i = 0; i < data.length; i++) {
          str += data[i].question + "\n";
      }
      chats = [...chats, {msg:str, incomingMsg: true}];
      setChatList([...chats].reverse());
      return;
    }
    for(let i = 0; i< data.length; i++){
      if(data[i].question.toLowerCase().includes(q.toLowerCase())){
        chats = [...chats, {msg:data[i].answer, incomingMsg: true}];
        setChatList([...chats].reverse());
        return;
      }
    }
    chats = [...chats, {msg:"Neznámá otázka,\npro seznam otázek zadejte \"help\"", incomingMsg: true}];
    setChatList([...chats].reverse());
    return;
    
  }

  const onSendMsg = () =>{
    chats = [...chats,{msg: msg, sentMsg : true}];
    setChatList([...chats].reverse());
    setTimeout(()=>{
      getAnswer(msg);
    },1000)
    setMsg('');
  }
  return (
    <View>
      <FlatList 
        style = {{height: '87%', bottom:'3%'}}
        data = {chatList}
        inverted={true}
        keyExtractor={(_,index)=>index.toString()}
        renderItem={({item})=>(
          <Msg
            incomingMsg={item.incomingMsg}
            msg={item.msg}
            sentMsg={item.sentMsg}

          />
        )}
      />
      <View style = {Styles.typeMsgContainer}>
          <TextInput
            style = {Styles.typeMsgBox}
            value = {msg}
            placeholder = "Zde napište otázku..."
            onChangeText={(val)=>setMsg(val)}
          />
          <TouchableOpacity
            style={[Styles.sendBtn,{backgroundColor: msg ? "orange" : "grey"}]}
            disabled={msg ? false : true}
            onPress={()=>onSendMsg()}
            >
            <Text style={Styles.sendText}>send</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatBot;

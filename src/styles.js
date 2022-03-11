import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    incomingMsgBox: {
        backgroundColor: "white",
        maxWidth: '70%',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 5,
        borderWidth: 0.5,
        borderColor: 'grey',
    },
    incomingMsgText:{
        color: 'black',
        fontSize: 16
    },
    sentMsgBox: {
        backgroundColor: "green",
        maxWidth: '70%',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-end',
        marginVertical: 5,
        marginHorizontal: 5,
    },
    sentMsgText:{
        color: 'white',
        fontSize: 16
    },
    typeMsgContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
        bottom: 5,
      },
    
      typeMsgBox: {
        borderWidth: 0.8,
        borderColor: 'grey',
        padding: 10,
        width: '80%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: '1%'
      },
    
      sendBtn: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1%'
      },
    
      sendText: {color: 'white'},
});

export default Styles
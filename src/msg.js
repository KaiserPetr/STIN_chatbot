import { View, Text } from 'react-native'
import React, {Fragment} from 'react'
import Styles from './styles'

const Msg = ({incomingMsg,sentMsg,msg}) => {
  return (
    <Fragment>
      {/* Incoming msg */}
      {incomingMsg && (
        <View style={Styles.incomingMsgBox}>
            <Text style={Styles.incomingMsgText}>{msg}</Text>
        </View>
         )}
      {/* Sent Msg */}
      {sentMsg && (
      <View style={Styles.sentMsgBox}>
            <Text style={Styles.sentMsgText}>{msg}</Text>
        </View>
      )}
    </Fragment>
  )
}

export default Msg;
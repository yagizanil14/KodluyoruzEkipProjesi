import React from "react"
import {TextInput, View} from "react-native"

const InputText = props => {
return(
    <View>
        <TextInput 
        placeholder={props.PlaceHolder}
        autoCapitalize={props.Capitalize}
        onChangeText={props.changeText} 
        keyboardType={props.type} 
        secureTextEntry={props.textSecurty}
        />
    </View>
)
}
export {InputText}
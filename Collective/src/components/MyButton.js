import React from "react"
import {TouchableOpacity, Text} from "react-native"

const MyButton = props => {
return(
    <TouchableOpacity onPress={props.pressButton}>
        <Text>{props.buttonTitle}</Text>
    </TouchableOpacity>
)
}
export {MyButton}
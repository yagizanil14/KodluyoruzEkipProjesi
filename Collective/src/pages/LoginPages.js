import React, {useState} from "react"
import { View, SafeAreaView, Text, Alert} from "react-native"
import {InputText, MyButton} from "../components"
import styles from "./styles"
import auth from '@react-native-firebase/auth';


const LoginPages = props => {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const ChangeEmail = text => setEmail(text)
    const ChangePass = text => setPassword(text)
    
    const authFire = async() =>{
        try{
            await auth().signInWithEmailAndPassword(email,password)
            props.navigation.navigate("MainPages")
        }catch{
            Alert.alert("LoginPages","Giriş Başarısız")
        }
    }

    
    return(
        <SafeAreaView>
            <View>
                <InputText 
                PlaceHolder="Email Adresinizi Giriniz"
                Capitalize="none"
                changeText={ChangeEmail} 
                type="email-address" 
                textSecurty={false} 
                />
                <InputText 
                PlaceHolder="Şifrenizi Giriniz"
                Capitalize="none"
                type="default"
                textSecurty={true}
                changeText={ChangePass}
                />

                <MyButton buttonTitle="Giriş Yap" pressButton={authFire}/>
                <MyButton buttonTitle="Kayıt Ol" pressButton={()=>props.navigation.navigate("SignUp")}/>
            </View>
        </SafeAreaView>
    )
}
export {LoginPages}
import React ,{useState} from 'react';
import {AppLoading} from "expo";
import {StyleSheet, Text, View} from 'react-native';
import {bootstrap} from "./src/bootstrap";
import {AppNavigation} from "./src/navigation/appNavigation";

export default function App() {
  
    const [isReady, setIsReady] = useState (false);
    if(!isReady){
        return <AppLoading
            startAsync={bootstrap}
            onFinish={()=> setIsReady(true)}
            onError={err=>console.log(err)
        }/>
    }
    return <AppNavigation/>
}



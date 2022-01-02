import React, { useState } from 'react';
import {StyleSheet, View , Text , TextInput,Alert, SafeAreaView,Keyboard, TouchableWithoutFeedback} from 'react-native'
import FlatButton from './FlatButton';

const Input = () => {

    const [ textInput, setTextInput]= useState('Enter Text');
    const [ passwordInput, setPasswordInput]= useState('password');

    const handleTextInp = (val)=> {
        console.log(val)

    }
    // const handleAlert = ()=>{
    //     Alert.alert(
    //         "Success",
    //         "Your data has been submited ",
    //         [
    //             {
    //                 text: "Cancel",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel"
    //             }, 
    //             {
    //                 text: "OK", onPress: () => console.log("OK Pressed") 
    //             },
    //         ]

    //     )
    // }

    return (
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        >
            <View style={styles.widthV}>
                <SafeAreaView style={styles.inputContainer}>
                            {/* input form  */}

                        <Text style={styles.text}> Register Form </Text>
                            <View style={styles.inputView}>
                                <TextInput 
                                value={textInput}
                                onChange={setTextInput}
                                style={styles.input}
                                onPress={handleTextInp}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput 
                                value={passwordInput}
                                keyboardType="numeric"
                                secureTextEntry={true}
                                onChange={setPasswordInput}
                                style={styles.input}
                                />
                            </View>

                                {/* custom Button */}
                            <FlatButton
                            onPress={handleAlert}
                              text=' On Submit' />

                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Input;

const styles = StyleSheet.create({
   
    inputContainer: { 
        marginTop: 25,

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1abc9c',
        textAlign: 'center',
        borderBottomWidth: 2,
        marginBottom: 10,
        borderColor: '#1abc9c',
        margin: 5, 
    },
   

    inputView: {
        margin: 5,
    },

    input: {
        borderWidth: 1,
        borderColor: '#1abc9c',
        borderRadius: 50,
        height: 35,
        textAlign: 'center',
    },

})
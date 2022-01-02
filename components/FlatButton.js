import React from 'react';
import {TouchableOpacity, View, Text,StyleSheet} from 'react-native'

const FlatButton = ({text, onPress }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default FlatButton;

const styles = StyleSheet.create({ 
    
    button: {
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 5,
        backgroundColor: '#1abc9c',
      },

      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
      }


})
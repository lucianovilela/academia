import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

 const Button = ({styles, onPress, children}) => 
    (
        <TouchableOpacity style={styles} onPress={onPress} >
            <Text style={{ color: "#ffffff" }}>{children}</Text>
        </TouchableOpacity>
    )


 export default Button;
import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sing Up for Trackers</Text>
            </Spacer>
            <Spacer>
                <Input 
                label="Email" 
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
                autoCapitalize="none"
                />
            </Spacer>
            <Spacer>
                <Input 
                label="Password" 
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                autoCapitalize="none"
                />
            </Spacer>
                {state.errorMessage ? <Text style={styles.error}> {state.errorMessage} </Text> : null }
            <Spacer>
                <Button title="Sign Up" onPress={() => signup({ email, password })}/>
            </Spacer>
        </ View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    error: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#d99b97',
        padding: 5,
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center'    }
});

export default SignupScreen;
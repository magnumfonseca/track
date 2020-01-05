import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children })=> {
    return <View style={styels.spacer}>{ children }</View>
};

const styels = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default Spacer;
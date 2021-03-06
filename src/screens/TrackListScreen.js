import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return <>
        <Text>Track List Screen</Text>
        <Button 
            title='Go To Track Detail'
            onPress={() => {
                navigation.navigate('TrackDetail');
            }}
        />
    </>;
};

const styles = StyleSheet.create({});

export default TrackListScreen;
import React from 'react';
import { StyleSheet } from 'react-native';
import { RnView } from '../view';

export const RnProgressBar = ({ progress }) => {
    return (
        <RnView style={styles.progressBarContainer}>
            <RnView style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </RnView>
    );
};



const styles = StyleSheet.create({
    progressBarContainer: {
        flex: 1,
        height: 10,
        backgroundColor: '#E7EAEE',
        borderRadius: 15,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4caf50',
    },
    progressText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -10 }, { translateY: -8 }],
        color: '#000',
    },
});



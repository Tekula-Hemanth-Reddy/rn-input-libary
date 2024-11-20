import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import rnConstants from 'src/config/rn-constants';

interface IButtonLoader {
    numberOfCircles?: number
    color?: string
    size?: number
}

/** 
 * Component Made Using ChatGPT
 */
const ButtonLoader = ({ numberOfCircles, color, size }: IButtonLoader) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        circle: {
            width: size || 7,
            height: size || 7,
            borderRadius: 5,
            backgroundColor: color || rnConstants.BODY
        },
    });



    const animatedValues = useRef([...Array(numberOfCircles || 4)].map(() => new Animated.Value(0))).current;

    useEffect(() => {
        const animations = animatedValues.map((animatedValue) => {
            return Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 300, // Adjust the duration for the complete wave cycle
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 300, // Adjust the duration for the complete wave cycle
                    useNativeDriver: true,
                }),
            ]);
        });

        Animated.loop(Animated.stagger(200, animations)).start(); // Adjust the stagger duration for the delay between circles
    }, [animatedValues]);

    const renderCircles = () => {
        return animatedValues.map((animatedValue, index) => {
            const translateY = animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, !!size ? -size : -7], // Adjust this value to control the maximum wave height
            });

            return (
                <Animated.View
                    key={index}
                    style={[
                        styles.circle,
                        {
                            transform: [{ translateY }],
                            marginLeft: index !== 0 ? 7 : 0, // Adjust spacing between circles
                        },
                    ]}
                />
            );
        });
    };

    return <View style={styles.container}>{renderCircles()}</View>;
};


export default ButtonLoader;

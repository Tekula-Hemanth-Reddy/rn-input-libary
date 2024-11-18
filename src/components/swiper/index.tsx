import React, { useRef, useState } from 'react'
import { Animated, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Dimensions } from 'react-native'
import colors from '../../config/colors'
import { RnView } from '../view'
import { RnSwiper } from 'src/types'


const RnSwiper = ({ children, pagination = true, snapScroll = true }: RnSwiper) => {

    const { height, width } = Dimensions.get("window");

    const pages = React.Children.count(children)
    const animationValues = new Array(pages).fill(0);

    const [activeIndex, setActiveIndex] = useState(0)


    /**
     * React Native Animations for Pagination
     */
    let pageAnimation = useRef(Array.from({ length: pages },
        (_, i) => new Animated.Value(i == activeIndex ? 1 : 0))).current;

    const animatePagination = (index: number) => {
        Animated.parallel([
            Animated.timing(pageAnimation[activeIndex], {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(pageAnimation[index], {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            })
        ]).start()

    }


    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentOffSet = event.nativeEvent.contentOffset.x
        const contentSize = event.nativeEvent.layoutMeasurement.width

        // Calculating Page Index when Offset is Half Scrolled the Content Size
        let pageIndex = Math.floor(currentOffSet / (contentSize / 2))

        // Since Index is Incremented When Half Scrolled, Need to Reset on last Index
        if (pageIndex > pages - 1) {
            pageIndex = pages - 1
        }

        if (pageIndex >= 0 && pageIndex != activeIndex) {
            animatePagination(pageIndex)
            setActiveIndex(pageIndex)
        }
    }


    const renderPagination = () => {
        return (
            <RnView row justifyCenter style={{ height: 40 }}>
                {
                    animationValues.map((_, index) => {
                        if (pageAnimation.length != animationValues.length) return
                        const dotStyle = {
                            width: pageAnimation[index].interpolate({
                                inputRange: [0, 1],
                                outputRange: [8, 38],
                            }),
                            backgroundColor: pageAnimation[index].interpolate({
                                inputRange: [0, 1],
                                outputRange: [colors.NEUTRAL.NEUTRAL_80, colors.NEUTRAL.NEUTRAL_900],
                            }),
                            paddingHorizontal: pageAnimation[index].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 6],
                            }),
                            paddingVertical: pageAnimation[index].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 4],
                            }),
                        }

                        const textStyle = {
                            fontSize: pageAnimation[index].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 10],
                            }),
                            color: pageAnimation[index].interpolate({
                                inputRange: [0, 1],
                                outputRange: [colors.TRANSPARENT, colors.WHITE],
                            }),
                            maxHeight: pageAnimation[index].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 20],
                            }),
                        }

                        return (
                            <Animated.View key={index} style={[styles.page, dotStyle]} >
                                <Animated.Text style={[styles.currentPageFont, textStyle]}> {index + 1} / {pages}</Animated.Text>
                            </Animated.View>
                        )
                    })
                }
            </RnView>
        )
    }

    const rederScrollView = () => (
        <ScrollView
            onScroll={handleScroll}
            snapToAlignment='start'
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={snapScroll ? width : undefined}
            decelerationRate="fast"
            scrollEventThrottle={16}
        >
            {children}
        </ScrollView>
    )

    return (
        <RnView>
            {rederScrollView()}
            {(pagination && pages > 1) ? renderPagination() : <></>}
        </RnView>
    )
}

export default RnSwiper

const styles = StyleSheet.create({
    page: {
        minHeight: 8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    currentPageFont: {
        fontWeight: "600"
    }
})
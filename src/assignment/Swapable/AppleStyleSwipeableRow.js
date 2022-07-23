import React, { Component, PropsWithChildren } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    View,
    I18nManager,
    Alert,
    Image,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class AppleStyleSwipeableRow extends Component {

    renderLeftAction = (text, color, x, progress, icon) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });
        const pressHandler = () => {
            this.close();
            Alert.alert(text);
        };

        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <Image source={icon} style={{ height: 18, width: 18, resizeMode: 'contain' }} />
                    {text && <Text style={styles.actionText}>{text}</Text>}
                </RectButton>
            </Animated.View>
        );
    };

    renderLeftActions = (_progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
            extrapolate: 'clamp',
        });
        return (
            <>
                <View
                    style={{
                        width: 192,
                        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
                    }}>
                    {this.renderLeftAction('More', '#C8C7CD', 192, _progress, require('./Images/more.png'))}
                    {this.renderLeftAction('Delete', 'red', 172, _progress, require('./Images/delete2.png'))}
                </View>
            </>
        );
    };

    renderRightAction = (
        text,
        color,
        x,
        progress
    ) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });
        const pressHandler = () => {
            this.close();
            Alert.alert(text);
        };

        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    renderRightActions = (
        progress,
        _dragAnimatedValue
    ) => (
        <View
            style={{
                width: 192,
                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            }}>
            {this.renderRightAction('More', '#C8C7CD', 192, progress)}
            {this.renderRightAction('Flag', '#ffab00', 128, progress)}
            {this.renderRightAction('More', '#dd2c00', 64, progress)}
        </View>
    );

    swipeableRow;

    updateRef = (ref) => {
        this.swipeableRow = ref;
    };
    close = () => {
        this.swipeableRow?.close();
    };
    render() {
        const { children } = this.props;
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                enableTrackpadTwoFingerGesture
                leftThreshold={30}
                rightThreshold={40}
                renderLeftActions={this.renderLeftActions}
                renderRightActions={this.renderRightActions}
            >
                {children}
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 10,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
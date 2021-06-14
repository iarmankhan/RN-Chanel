import React from 'react';
import {Dimensions, StyleSheet, View, TouchableWithoutFeedback, Alert, Image, Text} from 'react-native';

const {width, height} = Dimensions.get('window')

export const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;

export interface Item {
    title: string;
    subtitle: string;
    picture: number;
    top: number;
}

interface ItemProps {
    index: number;
    item: Item;
}

const Item: React.FC<ItemProps> = ({item: {title, subtitle, picture}}) => {
    return (
        <TouchableWithoutFeedback onPress={() => Alert.alert("Pressed!")}>
            <View style={[styles.container]}>
                <Image source={picture} style={[styles.picture]}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
                    <View style={styles.mainTitle}>
                        <View>
                            <Text style={styles.title}>{title.toUpperCase()}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        width,
        height: MAX_HEIGHT,
        justifyContent: 'flex-end'
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined
    },
    titleContainer: {
        maxHeight: MAX_HEIGHT * 0.61,
        justifyContent: "center",
        flex: 1,
    },
    subtitle: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    mainTitle: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        padding: 32,
        transform: [{ translateY: 64 }],
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 32,
        fontWeight: "500",
    }
});

export default Item;

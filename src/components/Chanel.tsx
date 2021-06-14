import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Animated from "react-native-reanimated";
import {items} from "../data";
import Item, {MAX_HEIGHT} from "./Item";

interface ChanelProps {
}

const Chanel: React.FC<ChanelProps> = () => {
    return (
        <ScrollView>
            <Animated.View style={[styles.container]}>
                {items.map((item, index) => (
                    <Item item={item} key={index}  index={index}/>
                ))}
            </Animated.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: items.length * MAX_HEIGHT,
        backgroundColor: "black",
    },
});

export default Chanel;

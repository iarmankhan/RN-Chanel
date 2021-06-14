import React from 'react';
import {StyleSheet, View} from 'react-native';

interface ItemProps {
}

const Item: React.FC<ItemProps> = () => {
    return <View style={styles.container}/>;
};

const styles = StyleSheet.create({
    container: {},
});

export default Item;

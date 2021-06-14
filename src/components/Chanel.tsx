import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { items } from "../data";

import Item, { MAX_HEIGHT } from "./Item";

const Chanel: React.FC = () => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value;
    },
  });
  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      contentContainerStyle={[styles.container]}
      onScroll={onScroll}
      snapToInterval={MAX_HEIGHT}
      decelerationRate="fast"
    >
      {items.map((item, index) => (
        <Item y={y} item={item} key={index} index={index} />
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (items.length + 1) * MAX_HEIGHT,
    backgroundColor: "black",
  },
});

export default Chanel;

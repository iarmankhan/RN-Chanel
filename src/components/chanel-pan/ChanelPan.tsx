import React from "react";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { clamp, snapPoint } from "react-native-redash";

import { items } from "../../data";

import Item, { MAX_HEIGHT } from "./Item";

const snapPoints = items.map((_, i) => i * -MAX_HEIGHT);

const ChanelPan: React.FC = () => {
  const y = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { y: number }
  >({
    onStart: (_, ctx) => {
      ctx.y = y.value;
    },
    onActive: ({ translationY }, ctx) => {
      y.value = clamp(
        translationY + ctx.y,
        -(items.length - 1) * MAX_HEIGHT,
        0
      );
    },
    onEnd: ({ velocityY: velocity }) => {
      const dest = snapPoint(y.value, velocity, snapPoints);
      y.value = withSpring(dest, { velocity, overshootClamping: true });
    },
  });
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View>
        {items.map((item, index) => (
          <Item y={y} item={item} key={index} index={index} />
        ))}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default ChanelPan;
